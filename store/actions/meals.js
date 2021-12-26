export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SETFILTERS';

export const toggleFavorite = (id) =>{
    return { type: TOGGLE_FAVORITE, mealId: id };
}

export const setFilters = filterSettings =>{
    return {type: SET_FILTERS, filters: filterSettings}
}