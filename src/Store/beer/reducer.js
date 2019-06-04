import * as types from './actionTypes';

const initialState = {
  beer: {},
  isLoading: false
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.BEER_FETCHED:
      return {...state, beer: action.beer};
    case types.BEER_LOADING:
      return {...state, isLoading: action.isLoading, beer: {}};
    case types.BEER_LOADED:
      return {...state, isLoading: action.isLoading};
    default:
      return state;
  }
}

export function getBeer(state) {
  return state.beers;
}
