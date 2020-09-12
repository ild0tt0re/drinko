import React from 'react'

import Grid from '../components/Grid'

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Grid {...args} />

export const WithGrid = Template.bind({})
WithGrid.args = {
  imageSrc: 'https://www.thecocktaildb.com/images/ingredients/bacardi.png',
  title: 'Ingrediente 1',
}
