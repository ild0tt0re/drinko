import React from 'react'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

type IngredientOrder = {
  imageSrc: string
  title: string
}

type CocktailOrder = IngredientOrder

type OrderData = {
  selectedIngredient?: IngredientOrder
  selectedCocktail?: CocktailOrder
}

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
        body {
          margin: 0;
        }
        main {
          padding: 20px 20px 40px;
          min-height: 80vh;
        }
        h1 {
          font-size: 40px;
          text-align: center;
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
