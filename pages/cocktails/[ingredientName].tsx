import { useRouter } from 'next/router'
import { getCocktailsByIngredient } from '../../services/api'
import { transformCocktailsData } from '../../services/transformers'
import Grid from '../../components/Grid'
import List from '../../components/List'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import OrderFlowLayout from '../../components/layout/OrderFlowLayout'
import useLazyLoadItems from '../../hooks/useLazyLoadItems'
import Marker from '../../components/Marker'
import WithCSSTransition from '../../components/WithCSSTransition'

function Cocktails({ cocktails, order }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // PAGE READY FROM HERE!
  const [{ itemsToShow: cocktailsToShow }, { ref, setRef }] = useLazyLoadItems(
    cocktails
  )

  const { orderData, setOrderData } = order

  const handleClick = (slug, newOrderData) => {
    const selectedCocktail = newOrderData
    setOrderData({ ...orderData, selectedCocktail })
    console.log('orderData', orderData)

    router.push(`/order-review`)
  }

  return (
    <>
      <WithCSSTransition classNames="order-page">
        <section className="ingredients-content">
          <h1>Cocktails</h1>
          <Grid>
            <List
              items={cocktailsToShow}
              handleClick={handleClick}
              buttonColor="#f1540a"
            ></List>
          </Grid>
          <Marker setRef={setRef} />
        </section>
      </WithCSSTransition>

      <style jsx>{`
        .ingredients-content :global(.card-container) {
          padding: 0 0 15px;
        }
        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
          .ingredients-content :global(.card-container) {
            padding: 0 0 20px;
          }
        }
      `}</style>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { ingredientName: 'Vodka' } },
      { params: { ingredientName: 'Gin' } },
      { params: { ingredientName: 'Rum' } },
      { params: { ingredientName: 'Tequila' } },
      { params: { ingredientName: 'Scotch' } },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getCocktailsByIngredient(params.ingredientName)
  const cocktails = transformCocktailsData(data)

  return {
    props: { cocktails },
    revalidate: 1,
  }
}

export default Cocktails

Cocktails.Layout = OrderFlowLayout
