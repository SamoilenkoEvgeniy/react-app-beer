import * as types from './actionTypes';
import PunkApiService from '../../Services/PunkApi.service';

export function fetchBeer(id) {
  return async (dispatch, getState) => {
    try {
      dispatch({type: types.BEER_LOADING, isLoading: true});
      const beer = await PunkApiService.getBeer(id);
      dispatch({type: types.BEER_FETCHED, beer: beer});
      dispatch({type: types.BEER_LOADED, isLoading: false});
    } catch (error) {
      console.error(error);
    }
  };
}
