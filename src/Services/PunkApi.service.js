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

  async getBeer(id) {
    const url = `${ENDPOINT}beers/${id}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error(`BeerService getBeer failed, HTTP status ${response.status}`);
    }

    // console.log(await response.json());
    const data = await response.json();
    return data[0];
  }

}

export default new PunkApiService();
