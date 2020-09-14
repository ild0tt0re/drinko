import { useRouter } from 'next/router'
import { getIngredientsList } from '../services/api'
import { transformIngredientsData } from '../services/transformers'
import Grid from '../components/Grid'
import List from '../components/List'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import OrderFlowLayout from '../components/layout/OrderFlowLayout'
import useLazyLoadItems from '../hooks/useLazyLoadItems'
import Marker from '../components/Marker'
import WithCSSTransition from '../components/WithCSSTransition'

const Cocktails = ({ ingredients, order }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  // PAGE READY FROM HERE!
  const [
    { itemsToShow: ingredientsToShow },
    { ref, setRef },
  ] = useLazyLoadItems(ingredients)

  const { orderData, setOrderData } = order

  const handleClick = (slug, newOrderData) => {
    const selectedIngredient = newOrderData
    setOrderData({ ...orderData, selectedIngredient })
    console.log('orderData', orderData)

    const url = `cocktails/${slug}`
    router.push(url)
  }

  return (
    <>
      <WithCSSTransition classNames="order-page">
        <section>
          <h1>Ingredients</h1>
          <Grid>
            <List items={ingredientsToShow} handleClick={handleClick}></List>
          </Grid>
          <Marker setRef={setRef} />
        </section>
      </WithCSSTransition>
      <style jsx>{`
        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
        }
      `}</style>
    </>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await getIngredientsList()
  const ingredients = transformIngredientsData(data)

  return {
    props: { ingredients },
    revalidate: 1,
  }
}

export default Cocktails

Cocktails.Layout = OrderFlowLayout
