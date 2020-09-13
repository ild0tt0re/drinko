import { useRouter } from 'next/router'
import OrderFlowLayout from '../components/layout/OrderFlowLayout'
import OrderBox from '../components/OrderBox'

const OrderReview = ({ ingredients }) => {
  const router = useRouter()

  const handleClick = (slug, as, options) => {
    const url = `cocktails/${slug}`
    router.push(url, as, options)
  }

  return (
    <>
      <h1>Order Review</h1>
      <OrderBox />
      
      <style jsx>{`
        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
        }
      `}</style>
    </>
  )
}

export default OrderReview

OrderReview.Layout = OrderFlowLayout
