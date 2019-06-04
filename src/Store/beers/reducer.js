import * as types from './actionTypes';

const initialState = {
  beers: [],
  isLoading: false,
  page: 1
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.BEERS_FETCHED:
      return {...state, beers: action.beers};
    case types.BEERS_LOADED:
    case types.BEERS_LOADING:
      return {...state, isLoading: action.isLoading};
    case types.BEERS_PAGE_CHANGE:
      return {...state, page: action.page};
    default:
      return state;
  }
}

export function getBeers(state) {
  return state.beers;
}
