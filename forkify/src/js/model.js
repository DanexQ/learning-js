import { API_URL, RES_PER_PAGE } from './config.js';
import { getJSON } from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
      bookmarked: state.bookmarks.some(
        bookmarkedRecipe => bookmarkedRecipe.id === id
      ),
    };
    console.log(state.bookmarks);
  } catch (err) {
    console.log(`MODEL - loadRecipe, ${err}`);
    throw err;
  }
};

export const loadSearchResults = async function (query) {
  try {
    state.search.page = 1;
    state.search.query = query;
    const { data } = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);
    state.search.results = data.recipes.map(recipe => {
      return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        image: recipe.image_url,
      };
    });
  } catch (err) {
    console.log(`MODEL - loadSearchResults, ${err}`);
    throw err;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;

  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

export const addBookmark = function (recipe) {
  if (recipe.id == state.recipe.id) {
    state.recipe.bookmarked = !state.recipe.bookmarked;
    state.bookmarks.push(recipe);
  }
  persistBookmark();
};

export const removeBookmark = function (id) {
  state.bookmarks = state.bookmarks.filter(
    bookmarkedRecipe => bookmarkedRecipe.id !== id
  );
  state.recipe.bookmarked = false;
  persistBookmark();
};

const persistBookmark = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (!storage) return;
  state.bookmarks = JSON.parse(storage);
};

init();

console.log(state.bookmarks);
