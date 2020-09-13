import { useRouter } from 'next/router'
import { Button } from '../components/Button'
import OrderFlowLayout from '../components/layout/OrderFlowLayout'
import OrderBox from '../components/OrderBox'

const OrderReview = ({ order }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <>
      <section className="order-review-content">
        <h1>Order Review</h1>
        <OrderBox {...order.orderData} />
        <Button
          label="Back to the Home"
          backgroundColor="#000"
          size="large"
          onClick={handleClick}
        />
      </section>

      <style jsx>{`
        .order-review-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .order-review-content :global(button) {
        }
        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
        }
      `}</style>
    </>
  )
}

export default OrderReview

OrderReview.Layout = OrderFlowLayout
