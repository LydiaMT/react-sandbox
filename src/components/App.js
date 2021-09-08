import React from 'react'
import RecipeList from './RecipeList'
import '../css/app.css'

function App() {
  const sampleRecipes = [
    {
      id: 1,
      name: 'Plain Chicken',
      servings: 3,
      cookTime: '1:45',
      instructions: '1. Put salt on Chicken\n2. Put Chicken in oven\n3. Eat the Chicken',
      ingredients: [
        {
          id: 1,
          name: 'Chicken',
          amount: '2 Pounds'
        },
        {
          id: 2,
          name: 'Salt',
          amount: '1 Tbs'
        }
      ]
    },
    {
      id: 2,
      name: 'Plain Pork',
      servings: 5,
      cookTime: '0:45',
      instructions: '1. Put paprika on Pork\n2. Put Pork in oven\n3. Eat the Pork',
      ingredients: [
        {
          id: 1,
          name: 'Pork',
          amount: '3 Pounds'
        },
        {
          id: 2,
          name: 'paprika',
          amount: '2 Tbs'
        }
      ]
    }
  ]
  
  return (
    <div>
      <RecipeList recipes={sampleRecipes}/>
    </div>
  )
}

export default App;
