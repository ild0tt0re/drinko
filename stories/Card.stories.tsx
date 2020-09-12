import React from 'react'

import Card from '../components/Card'

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Card {...args} />

export const WithTitleAndImage = Template.bind({})
WithTitleAndImage.args = {
  imageSrc: 'https://www.thecocktaildb.com/images/ingredients/bacardi.png',
  title: 'Ingrediente 1',
}

export const WithImage = Template.bind({})
WithImage.args = {
  imageSrc: 'https://www.thecocktaildb.com/images/ingredients/bacardi.png',
}
