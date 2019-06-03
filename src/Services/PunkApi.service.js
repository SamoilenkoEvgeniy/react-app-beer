const ENDPOINT = 'https://api.punkapi.com/v2/';

class PunkApiService {

  async getBeers(page) {
    const url = `${ENDPOINT}beers?page=${page}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`BeerService getBeers failed, HTTP status ${response.status}`);
    }

    return await response.json();
  }

}

export default new PunkApiService();
