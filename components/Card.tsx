import React from 'react'
import ResponsiveImageTCDB from './ResponsiveImageTCDB'

type CardProps = {
  imageSrc: string
  title: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
  return (
    <>
      <div className="card-container">
        <ResponsiveImageTCDB imageSrc={imageSrc} />
        {title && <p>{title}</p>}
      </div>
      <style jsx>{`
        .card-container {
          max-width: 700px;
          min-width: 100px;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default Card
