function RecipeCard({recipe}) {
  const {
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
    idMeal
  } = recipe;
  return (
    <>
    <div className="recipe">
      <img src={strMealThumb} alt={strMeal} />
      <h2>{strMeal}</h2>
      <p className="flow-text">
        <blockquote>
          Категория: {strCategory} <br />
          {strArea ? `Страна: ${strArea}` : null}
        </blockquote>
      </p>
      <p className="flow-text text-description">{strInstructions}</p>
      <table className="centered striped">
        <thead>
          <tr>
              <th>Ингредиент</th>
              <th>Кол-во</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(recipe).map(key => {
              if(key.includes('Ingredient') && recipe[key]) {
                return (
                  <tr key={key}>
                    <td>{recipe[key]}</td>
                    <td>{
                      recipe[`strMeasure${key.slice(13)}`]
                    }</td>
                  </tr>
                )
              }
              return null;
            })
          }
        </tbody>
      </table>

      {
        strYoutube ? (
          <div>
            <h4>Video recipe</h4>
            <iframe 
              className="video-recipe" 
              title={idMeal} 
              src={`https://www.youtube.com/embed/${strYoutube.slice(-11)}`} allowfullscreen
            />
          </div>
          ) : null
      }
    </div>
    </>
  );
}

export { RecipeCard }