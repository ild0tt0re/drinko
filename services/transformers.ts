function transformCocktailsData(data) {
  return data?.drinks.map((cocktail) => {
    return {
      imageSrc: cocktail.strDrinkThumb,
      title: cocktail.strDrink,
    }
  })
}

export { transformCocktailsData }
