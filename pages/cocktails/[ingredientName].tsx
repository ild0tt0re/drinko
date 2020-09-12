import { useRouter } from 'next/router'
import { getCocktailsByIngredient } from '../../services/api'
import { transformCocktailsData } from '../../services/transformers'
import Grid from '../../components/Grid'
import List from '../../components/List'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'

function Cocktails({ cocktails }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Grid>
      <List items={cocktails}></List>
    </Grid>
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
