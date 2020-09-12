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
