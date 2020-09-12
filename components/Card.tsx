import React from 'react'
import ResponsiveImageTCDB from './ResponsiveImageTCDB'
import { Button } from './Button'

export type CardProps = {
  imageSrc: string
  title: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
  return (
    <>
      <div className="card-container">
        <ResponsiveImageTCDB imageSrc={imageSrc} />
        {title && <p className="title">{title}</p>}
        <Button label="Seleziona" />
      </div>
      <style jsx>{`
        .card-container {
          max-width: 700px;
          min-width: 100px;
          width: 100%;
          position: relative;
          padding-bottom: 15px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          border-radius: 10px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        }
        .title {
          text-align: center;
        }
        .card-container :global(button) {
          position: absolute;
          bottom: -17px;
        }
      `}</style>
    </>
  )
}

export default Card
