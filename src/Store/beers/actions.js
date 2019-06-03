import * as types from './actionTypes';
import PunkApiService from '../../Services/PunkApi.service';

export function fetchBeers(page) {
  return async (dispatch, getState) => {
    try {
      dispatch({type: types.BEERS_LOADING, isLoading: true});
      const beerArray = await PunkApiService.getBeers(page);
      dispatch({type: types.BEERS_FETCHED, beers: beerArray});
      dispatch({type: types.BEERS_LOADED, isLoading: false});
    } catch (error) {
      console.error(error);
    }
  };
}

export function nextPage() {
  
}
