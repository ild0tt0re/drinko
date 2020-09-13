import React from 'react'

export type FooterProps = {}

const Footer: React.FC<FooterProps> = ({}) => {
  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <footer>
        
      </footer>

      <style jsx>{`
        footer {
          display: flex;
          justify-content: center;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
          position: sticky;
          bottom: 0;
          z-index: 50;
          margin: 0;
          padding: 20px;
          background: #fff;
        }

        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
          footer {
          }
        }
      `}</style>
    </>
  )
}

export default Footer
