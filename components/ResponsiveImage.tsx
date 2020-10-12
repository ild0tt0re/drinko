import React from 'react'
import Img from 'react-optimized-image'

//TODO: WARNING: do not use this component! waiting for next-optimized-images v3 stable

type ImageProps = {
  imageSrc: string
}

const ResponsiveImage: React.FC<ImageProps> = ({ imageSrc }) => {
  debugger
  // const imageFile = `Gin.png`
  const imageFile = imageSrc.match(/(\w*).(png|jpe?g)/)[1]
  console.log('imageFile: ', imageFile)
  
  return (
    <>
      <Img
        src={require(`../public/images/gin.png`)}
        webp
        sizes={[100, 300, 500, 700]}
        densities={[1, 2]}
        loading="lazy"
      />

      <style jsx>{`
        img {
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default ResponsiveImage
