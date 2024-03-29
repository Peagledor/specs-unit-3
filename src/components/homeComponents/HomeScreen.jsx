import { React, useEffect, useState } from 'react'
import AdBanner from './AdBanner'
import axios from "axios";
import RecipeContainer from './RecipeContainer'

const HomeScreen = () => {  
  const [ recipes, setRecipes ] = useState([]);
  const url = `https://recipes.devmountain.com`;

  const getRecipes = () => {
    axios
      .get(
        `https://recipes.devmountain.com/recipes`
      )
      .then((res) => {
        // setRecipes(res.data)
        console.log(res.data);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}

      <RecipeContainer recipes={recipes}/>

    </div>
  )
}

export default HomeScreen