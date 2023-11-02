import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";
import '../css/Recipe.css';

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe-container">
      <div className="recipe">
        <h2>{label}</h2>
        <img src={image} alt={label} />
        <a href={url} target="_blank" rel="noopener noreferrer">
          Click for more recipe details...
        </a>
        <button className="btn" onClick={() => setShow(!show)}>Ingredients</button>
        {show && <RecipeDetails ingredients={ingredients} />}
      </div>
    </div>
  );
};

export default Recipe;
