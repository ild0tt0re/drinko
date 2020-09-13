import { useRouter } from 'next/router'
import React from 'react'

export type HeaderProps = {}

const Header: React.FC<HeaderProps> = ({}) => {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <header>
        <button className="back" onClick={() => router.back()}>
          &lt;
        </button>
        <div>logo</div>
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
          padding: 20px;
          background: #fff;
        }

        .back {
          position: absolute;
          left: 30px;
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
