import React from 'react'

export default function RecipeIngredientEdit({ ingredient }) {
  return (
    <>
      <input type="text" className="recipe-edit__input" value={ingredient.name}/>
      <input type="text" className="recipe-edit__input" value={ingredient.amount}/>
      <button className="btn btn--danger recipe-edit__btn">&times;</button>
    </>
  )
}
