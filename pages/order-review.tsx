import { useRouter } from 'next/router'
import { Button } from '../components/Button'
import OrderFlowLayout from '../components/layout/OrderFlowLayout'
import OrderBox from '../components/OrderBox'
import WithCSSTransition from '../components/WithCSSTransition'

const OrderReview = ({ order }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <>
      <WithCSSTransition classNames="order-page">
        <section className="order-review-content">
          <h1>Order Review</h1>
          <OrderBox {...order.orderData} />
          <p className="message">
            You will be served shortly by a member of our staff
          </p>
          <Button
            label="Back to the Home"
            backgroundColor="#000"
            size="large"
            onClick={handleClick}
          />
        </section>
      </WithCSSTransition>

      <style jsx>{`
        .order-review-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 80vh;
        }
        .order-review-content :global(button) {
          margin-top: 20px;
        }
        .message {
          background: #9e9e9e14;
          padding: 30px;
        }
        :global(button.back) {
          display: none;
        }
        :global(footer) {
          position: fixed !important;
          width: 100%;
          text-align: center;
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
