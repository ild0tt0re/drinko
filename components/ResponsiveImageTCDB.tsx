type ImageTCDB = {
  mobile: string
  tablet?: string
  desktop: string
}

type ImageProps = {
  imageSrc: string
}

const ResponsiveImageTCDB: React.FC<ImageProps> = ({ imageSrc }) => {
  debugger
  const image: ImageTCDB = {
    mobile: imageSrc.replace('.png', '-Small.png'),
    tablet: imageSrc.replace('.png', '-Medium.png'),
    desktop: `${imageSrc}`,
  }

  return (
    <>
      <img
        srcSet={`${image.mobile} 100w,
                 ${image.tablet ? image.tablet + ' 400w,' : ''}
                 ${image.desktop} 700w`}
        sizes={`(max-width: 576px) 100px,
                (max-width: 1200px) 400px,
                700px`}
        src={image.tablet}
        alt="Bacardi"
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
