import ResponsiveImageTCDB from './ResponsiveImageTCDB'

type IngredientOrder = {
  imageSrc: string
  title: string
}

type CocktailOrder = IngredientOrder

export type OrderData = {
  selectedIngredient?: IngredientOrder
  selectedCocktail?: CocktailOrder
}

const OrderBox: React.FC<OrderData> = ({
  selectedIngredient,
  selectedCocktail,
}) => {
  return (
    <>
      <div className="order-box-container">
        <p>Your order has been taken</p>
        <ul>
          <li>
            {selectedIngredient?.imageSrc && (
              <span>
                <ResponsiveImageTCDB imageSrc={selectedIngredient?.imageSrc} />
              </span>
            )}
            <span>
              Ingredient: <br />
              {selectedIngredient?.title}
            </span>
          </li>
          <li>
            {selectedCocktail?.imageSrc && (
              <span>
                <ResponsiveImageTCDB imageSrc={selectedCocktail?.imageSrc} />
              </span>
            )}
            <span>
              Cocktail: <br />
              {selectedCocktail?.title}
            </span>
          </li>
        </ul>
      </div>

      <style jsx>{`
        .order-box-container {
        }
        ul {
          margin: 0;
          padding: 0;
        }
        li {
          display: flex;
          margin: 30px 0;
        }
        .order-box-container :global(img) {
          width: 100px;
          margin-right: 10px;
          box-shadow: inset 0px 0px 10px 0px #00000054;
          border-radius: 10px;
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

export default OrderBox
