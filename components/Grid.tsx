import React from 'react'

const Grid: React.FC<any> = ({ children }) => {
  return (
    <>
      <ul className="grid-container">{children}</ul>

      <style jsx>{`
        .grid-container {
          display: grid;
          padding: 0;
          margin: 0;
          grid-template-columns: 1fr 1fr;
          justify-items: center;
          align-items: center;
          grid-gap: 30px 15px;
        }
        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
          .grid-container {
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 30px;
          }
        }
        /* Large devices (desktops)*/
        @media (min-width: 992px) {}
        /* Extra large devices (large desktops) */
        @media (min-width: 1200px) {
          .grid-container {
            grid-template-columns: repeat(5, 1fr);
          }
        }
      `}</style>
    </>
  )
}

export default Grid
