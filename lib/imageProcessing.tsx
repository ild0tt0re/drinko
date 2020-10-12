import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const basePath = path.resolve('./public/')

const temporaryStoreImage = (slug, resp) =>
  new Promise((resolve, reject) => {
    const fileStream = fs.createWriteStream(`/tmp/${slug}.png`)
    if (!resp || !resp.body) {
      reject('no body on fetch response')
    } else {
      resp.body.pipe(fileStream)
      fileStream.on('finish', () => {
        resolve()
      })
      fileStream.on('error', (err) => {
        reject(err)
      })
    }
  })

const removeTemporaryImage = (slug) =>
  new Promise((resolve, reject) => {
    if (fs.existsSync(`/tmp/${slug}.png`)) {
      fs.unlink(`/tmp/${slug}.png`, (err) => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    }
  })

const convertImageToWebP = (slug) =>
  new Promise((resolve, reject) => {
    sharp(`/tmp/${slug}.png`).toFile(
      `${process.cwd()}/public/images/${slug}.webp`,
      (error, info) => {
        if (error) {
          reject(error)
        } else {
          resolve(info)
        }
      }
    )
  })

const withStreamConvertImageFromUrl = async (imageSrc, format) => {
  const image = imageSrc.match(/(\w*).(png|jpe?g)/)[1]

  const resp = await fetch(imageSrc)
  const tempStoreImage = await temporaryStoreImage(image, resp).catch((e) =>
    console.log('ERROR: temporaryStoreImage', e)
  )
  console.log('tempStoreImage: ', tempStoreImage)
  await convertImageToWebP(image).catch((e) =>
    console.log('ERROR: convertImageToWebP', e)
  )
  await removeTemporaryImage(image).catch((e) =>
    console.log('ERROR: removeTemporaryImage', e)
  )

  return {
    webp: image,
  }
}

const withBufferConvertImageFromUrl = async (imageSrc) => {
  const response = (await fetch(imageSrc)).arrayBuffer()
  const input = toBuffer(await response) as Buffer

  console.log('withFetch: ', input)

  /* fetch directly buffer with axios */
  // const composite = (
  //   await axios({
  //     url: 'https://www.thecocktaildb.com/images/media/drink/hbkfsh1589574990.jpg',
  //     responseType: 'arraybuffer',
  //   })
  // ).data as Buffer
  // console.log('withAxios: ', composite)

  const imageName = imageSrc
    .split('/')
    .pop()
    .replace(/(.png|.jpe?g)/, '')
  console.log('imageName: ', imageName)
  const output = await sharp(input)
    .webp({ lossless: true })
    .toFile(path.resolve(`./public/images/${imageName}.webp`))
}

const fetchImage = async (fromUrl, toPath = './public/images') => {
  const imageNameWithExt = fromUrl.match(/\w*.(png|jpe?g)/)[0]
  const response = (await fetch(fromUrl)).arrayBuffer()
  const input = toBuffer(await response) as Buffer
  const output = await sharp(input).toFile(
    path.resolve(`${toPath}/${imageNameWithExt}`)
  )
}

const buildImageUrl = (slug) => {
  return `https://www.thecocktaildb.com/images/ingredients/${slug}.png`
}

function toBuffer(ab) {
  var buf = Buffer.alloc(ab.byteLength)
  var view = new Uint8Array(ab)
  for (var i = 0; i < buf.length; ++i) {
    buf[i] = view[i]
  }
  return buf
}

export {
  withBufferConvertImageFromUrl,
  withStreamConvertImageFromUrl,
  fetchImage,
}
