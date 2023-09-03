import { API_URL } from './api';

const getMealById = async (mealId) => {
    const data = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await data.json();
};

const getAllCategories = async () => {
    const data = await fetch(API_URL + 'categories.php');
    return await data.json();
};

const getFilteredCategory = async (categoryName) => {
    const data = await fetch(API_URL + 'filter.php?c=' + categoryName);
    return await data.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
