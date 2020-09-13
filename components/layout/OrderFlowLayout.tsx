import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { OrderData } from '../OrderBox'

const OrderFlowLayout = ({ children }) => {
  const [orderData, setOrderData] = useState<OrderData>(null)

  let childrenWithAdditionalProps = React.cloneElement(children, {
    order: {
      orderData,
      setOrderData,
    },
  })

  return (
    <>
      <Header />
      <main>{childrenWithAdditionalProps}</main>
      <Footer />

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

        body {
        }
        main {
          padding: 20px 20px 40px;
          min-height: 80vh;
        }
        h1 {
          font-size: 40px;
          padding: 30px 10px;
          text-align: center;
          font-family: 'Luckiest Guy', cursive;
        }
        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
        }
        /* Large devices (desktops)*/
        @media (min-width: 992px) {
        }
        /* Extra large devices (large desktops) */
        @media (min-width: 1200px) {
        }
      `}</style>
    </>
  )
}

export default OrderFlowLayout
