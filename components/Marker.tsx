import React, { RefObject } from 'react'

type MarkerProps = {
  setRef: RefObject<HTMLDivElement>
}

const Marker: React.FC<MarkerProps> = ({ setRef }) => {
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
