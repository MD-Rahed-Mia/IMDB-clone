const API_TOKEN = import.meta.env.VITE_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";

export default async function API_Call(params) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: API_TOKEN,
    },
  };

  return fetch("https://api.themoviedb.org/3/" + params, options)
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
}
