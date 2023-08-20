import { RecipeCard } from '../components/RecipeCard';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';


function Recipe(props) {
  
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getMealById(id).then(data => setRecipe(data.meals[0]));
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? ( <Preloader /> ) : (
        <RecipeCard recipe={recipe} />
      )}
      <button className='btn' onClick={() => navigate(-1)}>go back</button>
    </>
  );
}

export { Recipe }