import React from 'react'

type GridProps = {
  imageSrc: string
  title: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Grid: React.FC<GridProps> = ({ imageSrc, title }) => {
  return (
    <>
      <div className="grid-container">
        <ul>
          <li>Questo è un ingrediente</li>
          <li>Questo è un ingrediente</li>
          <li>Questo è un ingrediente</li>
          <li>Questo è un ingrediente</li>
          <li>Questo è un ingrediente</li>
          <li>Questo è un ingrediente</li>
          <li>Questo è un ingrediente</li>
          <li>Questo è un ingrediente</li>
          <li>Questo è un ingrediente</li>
        </ul>
      </div>
      <style jsx>{`
        .grid-container {
          max-width: 700px;
          min-width: 100px;
          width: 100%;
        }
      `}</style>
    </>
  )
}

export default Grid
