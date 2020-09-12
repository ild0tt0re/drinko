import { useRouter } from 'next/router'
import { getCocktailsByIngredient } from '../../services/api'
import { transformCocktailsData } from '../../services/transformers'
import Grid from '../../components/Grid'
import List from '../../components/List'

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

export async function getStaticPaths() {
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

export async function getStaticProps({ params }) {
  const data = await getCocktailsByIngredient(params.ingredientName)
  console.log('cocktails', data)
  const cocktails = transformCocktailsData(data)

  return {
    props: { cocktails },
    revalidate: 1,
  }
}

export default Cocktails
