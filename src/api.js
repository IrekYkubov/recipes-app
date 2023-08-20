import { URL_API } from "./config";

const getMealById = async (mealId) => {
  const response = await fetch(URL_API + 'lookup.php?i=' + mealId);
  return await response.json();
}

const getAllCategories = async () => {
  const response = await fetch(URL_API + 'categories.php');
  return await response.json();
}

const getFilteredCategory = async (mealCat) => {
  const response = await fetch(URL_API + 'filter.php?c=' + mealCat);
  return await response.json();
}

export { getMealById, getAllCategories, getFilteredCategory }