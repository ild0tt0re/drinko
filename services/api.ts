const baseUrl = `https://www.thecocktaildb.com`
const apiVersion = `/api/json/v1/1`

const apiBaseUrl = `${baseUrl}${apiVersion}`

async function doRequest(queryParam) {
  try {
    const response = await fetch(apiBaseUrl.concat(queryParam))
    return response.json()
  } catch (error) {
    console.log('Request Error: ', error)
    throw new Error(error)
  }
}

async function getIngredientsList() {
  const ingredientsList = `/list.php?i=list`

  try {
    return doRequest(ingredientsList)
  } catch (e) {
    console.log(`ERROR: getIngredientsList`)
  }
}

async function getCocktailsByIngredient() {
  const filterCocktailsByIngredient = `/filter.php?i=Vodka`

  try {
    const response = await fetch(apiBaseUrl)
    return response.json()
  } catch {
    console.log(`ERROR: getCocktailsByIngredient`)
  }
}

export { getIngredientsList, getCocktailsByIngredient }
