import React from 'react'

import List from '../components/List'

export default {
  title: 'Components/List',
  component: List,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <List {...args} />

export const WithIngredients = Template.bind({})
WithIngredients.args = {
  items: [
    {
      imageSrc: 'https://www.thecocktaildb.com/images/ingredients/bacardi.png',
      title: 'Ingrediente 1',
    },
    {
      imageSrc: 'https://www.thecocktaildb.com/images/ingredients/bacardi.png',
      title: 'Ingrediente 2',
    },
    {
      imageSrc: 'https://www.thecocktaildb.com/images/ingredients/bacardi.png',
      title: 'Ingrediente 3',
    },
    {
      imageSrc: 'https://www.thecocktaildb.com/images/ingredients/bacardi.png',
      title: 'Ingrediente 4',
    },
    {
      imageSrc: 'https://www.thecocktaildb.com/images/ingredients/bacardi.png',
      title: 'Ingrediente 5',
    },
    {
      imageSrc: 'https://www.thecocktaildb.com/images/ingredients/bacardi.png',
      title: 'Ingrediente 6',
    },
    {
      imageSrc: 'https://www.thecocktaildb.com/images/ingredients/bacardi.png',
      title: 'Ingrediente 7',
    },
    {
      imageSrc: 'https://www.thecocktaildb.com/images/ingredients/bacardi.png',
      title: 'Ingrediente 8',
    },
    {
      imageSrc: 'https://www.thecocktaildb.com/images/ingredients/bacardi.png',
      title: 'Ingrediente 9',
    },
  ],
}

export const WithCocktails = Template.bind({})
WithCocktails.args = {
  buttonColor: '#f1540a',
  items: [
    {
      imageSrc:
        'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
      title: 'Cocktail 1',
    },
    {
      imageSrc:
        'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
      title: 'Cocktail 2',
    },
    {
      imageSrc:
        'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
      title: 'Cocktail 3',
    },
    {
      imageSrc:
        'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
      title: 'Cocktail 4',
    },
    {
      imageSrc:
        'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
      title: 'Cocktail 5',
    },
    {
      imageSrc:
        'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
      title: 'Cocktail 6',
    },
    {
      imageSrc:
        'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
      title: 'Cocktail 7',
    },
    {
      imageSrc:
        'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
      title: 'Cocktail 8',
    },
    {
      imageSrc:
        'https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg',
      title: 'Cocktail 9',
    },
  ],
}
