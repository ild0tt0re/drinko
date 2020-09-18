function transformIngredientsData(data, imgLocalFolder = false) {
  return data?.drinks.map((ingredient) => {
    const { strIngredient1 } = ingredient

    return {
      imageSrc: imgLocalFolder ? `/images/${strIngredient1}.webp` : `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}.png`,
      title: strIngredient1,
    }
  })
}

function transformCocktailsData(data) {
  return data?.drinks.map((cocktail) => {
    return {
      imageSrc: cocktail.strDrinkThumb,
      title: cocktail.strDrink,
    }
  })
}

export { transformCocktailsData, transformIngredientsData }
