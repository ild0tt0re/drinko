import React from 'react'

const Marker: React.FC<any> = ({ setRef }) => {
  return (
    <>
      <div className="marker-container" ref={setRef}>
        Loading...
      </div>

      <style jsx>{`
        .marker-container {
          visibility: hidden;
          opacity: 0;
        }
      `}</style>
    </>
  )
}

export default Marker
