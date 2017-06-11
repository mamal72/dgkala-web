const API_REQUEST_ADDRESS = 'https://search.digikala.com/api2/Data/Get?incredibleOnly=true';

export function getIncredibleOffers() {
  return new Promise((res, rej) => {
    fetch(`${API_REQUEST_ADDRESS}`)
      .then(response => response.json())
      .then(data => res(data.responses[0].hits))
      .catch(err => rej(err))
  });
}
