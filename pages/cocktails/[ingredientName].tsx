import { useRouter } from 'next/router'
import { getCocktailsByIngredient } from '../../services/api'
import { transformCocktailsData } from '../../services/transformers'
import Grid from '../../components/Grid'
import List from '../../components/List'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import OrderFlowLayout from '../../components/layout/OrderFlowLayout'

function Cocktails({ cocktails }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <section className="ingredients-content">
        <Grid>
          <List items={cocktails} buttonColor="#f1540a"></List>
        </Grid>
      </section>

      <style jsx>{`
        .ingredients-content :global(.card-container) {
          padding: 0 0 15px;
        }
        /* Medium devices (tablets)*/
        @media (min-width: 768px) {
          .ingredients-content :global(.card-container) {
            padding-bottom: 0 0 20px;
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
