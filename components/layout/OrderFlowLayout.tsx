import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

const OrderFlowLayout = ({ children }) => {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Header />
      <p>
        <button onClick={() => setCounter(counter + 1)}>
          Clicked {counter} Times
        </button>
      </p>

      <main>{children}</main>
      <Footer />

      <style jsx>{`
        main {
          padding: 20px 20px 40px;
          min-height: 80vh;
        }
        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
        }
      `}</style>
      
      <style jsx global>{`
        body {
          margin: 0;
        }
        h1 {
          font-size: 40px;
          text-align: center;
        }
        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
        }
      `}</style>
    </>
  )
}

export default OrderFlowLayout
