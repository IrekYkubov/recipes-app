import { MealsItem } from './MealsItem';

function MealsList({meals = []}) {
  
  return (
    <div className='list'>
      {
        meals.map(el => (
          <MealsItem key={el.idMeal} {...el} />
        ))
      }
    </div>
  );

}

export { MealsList }