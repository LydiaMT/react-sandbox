import React, { useState, useEffect } from 'react'
import RecipeList from './RecipeList'
import RecipeEdit from './RecipeEdit'
import '../css/app.css';
import { v4 as uuidv4 } from 'uuid';

// Global Object
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

// Allows you to pass down props with context
// Removes the need to deeply nest which can be challenging to read
export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
  const [selectedRecipeId, setselectedRecipeId] = useState();
  const [recipes, setRecipes] = useState(sampleRecipes);
  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
  console.log('selectedRecipe', selectedRecipe)
  
  // Load from Local storage
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON) setRecipes(JSON.parse(recipeJSON))
  }, []) // only load when application starts

  // add to local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes]) // load when recipes is updated


  // Object with now key will automaitcally assign the value as the key
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete ,
    handleRecipeSelect,
    handleRecipeChange
  }
  
  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes] //duplicate as to note mutate original array
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe;
    setRecipes(newRecipes);
  }

  function handleRecipeSelect(id) {
    setselectedRecipeId(id);
  }

  // handle represents a 'click' event here (can techinical name whatever you want)
  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs' }
      ]
    }
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList 
        recipes={recipes}
      />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe}/>}
    </RecipeContext.Provider>
  )
}

export default App;
