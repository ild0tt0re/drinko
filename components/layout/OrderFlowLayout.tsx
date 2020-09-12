import { useState } from 'react'

const OrderFlowLayout = ({ children }) => {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <p>
        <button onClick={() => setCounter(counter + 1)}>
          Clicked {counter} Times
        </button>
      </p>

      {children}
    </>
  )
}

export default OrderFlowLayout
