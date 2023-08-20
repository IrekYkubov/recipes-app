import { useState, useEffect } from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { Preloader } from '../components/Preloader';
import { getFilteredCategory } from '../api';
import { MealsList } from '../components/MealsList';

function Category() {

  const { name } = useParams();
  const navigate = useNavigate();
  const [meals, setMeals] = useState([]);


  useEffect(() => {
    getFilteredCategory(name).then(data => setMeals(data.meals));
  }, [name]);

  return (
    <>
      <button className='btn' onClick={() => navigate(-1)}>go back</button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  )
  
}

export { Category }