const CORS_ANYWHERE_ADDRESS = 'https://cors-anywhere.herokuapp.com/';
const API_REQUEST_ADDRESS = 'https://cors-anywhere.herokuapp.com/https://service2.digikala.com/api/IncredibleOffer/GetIncredibleOffer';

export function getIncredibleOffers() {
  return new Promise((res, rej) => {
    fetch(`${CORS_ANYWHERE_ADDRESS}${API_REQUEST_ADDRESS}`, {
      headers: {
        "ApplicationVersion": "1.4.0"
      }
    })
      .then(response => response.json())
      .then(data => res(data.Data))
      .catch(err => rej(err))
  });
}
