import React from 'react'
import Grid from '../components/Grid'
import List from '../components/List'
import * as ListStories from './List.stories'

export default {
  title: 'Components/Grid',
  component: Grid,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => <Grid {...args} />

export const WithIngredients = Template.bind({})
WithIngredients.args = {
  children: <List items={ListStories.WithIngredients.args.items}></List>,
}

export const WithCocktails = Template.bind({})
WithCocktails.args = {
  children: <List items={ListStories.WithCocktails.args.items}></List>,
}
