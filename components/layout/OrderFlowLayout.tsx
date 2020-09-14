import React, { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { OrderData } from '../OrderBox'
import { CSSTransition } from 'react-transition-group'

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

      <style jsx global>{``}</style>
    </>
  )
}

export default OrderFlowLayout
