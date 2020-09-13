import React from 'react'

const FrameLayout = ({ children }) => {
  return (
    <>
      <header></header>
      <main>{children}</main>
      <footer></footer>

      <style jsx global>{`
        header,
        footer {
          position: absolute;
          z-index: 50;
          margin: 0;
          padding: 0;
          height: 100px;
          width: 100%;
          background: #fff;
        }
        header {
          top: 0;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        }
        footer {
          bottom: 0;
          box-shadow: 0px -5px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
        }

        main {
          min-height: initial;
          padding: 0;
        }
      `}</style>
    </>
  )
}

export default FrameLayout
