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

async function getCocktailsByIngredient(queryParam) {
  const filterCocktailsByIngredient = `/filter.php?i=${queryParam}`

  try {
    return await doRequest(filterCocktailsByIngredient)
  } catch {
    console.log(`ERROR: getCocktailsByIngredient`)
  }
}

export { getIngredientsList, getCocktailsByIngredient }
