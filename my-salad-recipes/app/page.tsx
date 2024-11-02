"use client";

import { useState } from 'react';
import recipes from '../public/recipes.json';

type Recipe = {
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
};

export default function Home() {
  const [recipe, setRecipe] = useState<Recipe>(getRandomRecipe());

  function getRandomRecipe(): Recipe {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
  }

  function handleNewRecipe() {
    setRecipe(getRandomRecipe());
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-64 h-40 object-cover mb-4 rounded-lg shadow-md"
      />
      <h2 className="text-xl font-semibold mb-2">Ingrédients :</h2>
      <ul className="list-disc pl-5 mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions :</h2>
      <ol className="list-decimal pl-5 mb-4">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <button onClick={handleNewRecipe} className="btn btn-primary mt-4">
        Nouvelle recette
      </button>
    </div>
  );
}
