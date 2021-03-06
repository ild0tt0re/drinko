import React from 'react'
import { useRouter } from 'next/router'
import Chevron from '../../public/icons/chevron.svg'
import usePointerDown from '../../hooks/usePointerDown'

export type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
  const router = useRouter()
  const [isPointerDown, { onPointerDown, onPointerUp }] = usePointerDown()

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <header>
        <button
          className={`back marker-container ${
            isPointerDown ? 'pointer-down' : ''
          }`}
          onClick={() => router.back()}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
        >
          <Chevron />
        </button>
      </header>

      <style jsx>{`
        header {
          display: flex;
          justify-content: center;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
          position: sticky;
          top: 0;
          z-index: 50;
          margin: 0;
          padding: 0 20px;
          background: #fff;
        }

        .back {
          position: absolute;
          top: 10px;
          left: 30px;
          border: 0;
          border-radius: 10px;
          height: 50px;
          width: 50px;
          padding: 10px;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23);
          background: white;
          cursor: pointer;
        }
        .back :global(svg) {
          width: 100%;
          height: 100%;
          transform: rotate(180deg);
        }
        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
          header {
          }
        }
      `}</style>
    </>
  )
}

export default Header
