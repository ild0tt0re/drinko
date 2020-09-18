import { getImageNameFromPath, getImageTypeFromPath } from 'lib/imageUtils'
import { useState } from 'react'

type ImageTCDB = {
  mobile: string
  tablet?: string
  desktop: string
}

type ImageProps = {
  imageSrc: string
}

const ResponsiveImageTCDB: React.FC<ImageProps> = ({ imageSrc }) => {
  const [images, setImages] = useState(buildImageUrlByDevice(imageSrc))

  function buildImageUrlByDevice(imgSrc): ImageTCDB {
    const encodedImgSrc = encodeURI(imgSrc)
    const imgExt = getImageTypeFromPath(imageSrc)

    return {
      mobile: encodedImgSrc.replace(`.${imgExt}`, `-Small.${imgExt}`),
      tablet: encodedImgSrc.includes('ingredients')
        ? encodedImgSrc.replace(`.${imgExt}`, `-Medium.${imgExt}`)
        : null,
      desktop: `${encodedImgSrc}`,
    }
  }

  const onError = () => {
    const imageName = getImageNameFromPath(imageSrc)
    // const imageType = getImageTypeFromPath(imageSrc)
    const thecocktaildbUrl = `https://www.thecocktaildb.com/images/ingredients/${imageName}.png`

    setImages(buildImageUrlByDevice(thecocktaildbUrl))
  }

  return (
    <>
      <img
        srcSet={`${images.mobile} 100w,
                 ${images.tablet ? images.tablet + ' 400w,' : ''}
                 ${images.desktop} 700w`}
        sizes={`(max-width: 576px) 100px,
                ${
                  images.tablet
                    ? images.tablet + '(max-width: 1200px) 400px,'
                    : ''
                }
                700px`}
        src={images.tablet}
        alt="Bacardi"
        onError={onError}
      />
      <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default ResponsiveImageTCDB
