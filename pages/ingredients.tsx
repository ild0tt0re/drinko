import { useRouter } from 'next/router'
import { getIngredientsList } from '../services/api'
import { transformIngredientsData } from '../services/transformers'
import Grid from '../components/Grid'
import List from '../components/List'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import OrderFlowLayout from '../components/layout/OrderFlowLayout'

const Cocktails = ({ ingredients }) => {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  const handleClick = (slug, as, options) => {
    const url = `cocktails/${slug}`
    router.push(url, as, options)
  }

  return (
    <>
      <h1>Ingredients</h1>
      <Grid>
        <List items={ingredients} handleClick={handleClick}></List>
      </Grid>
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
