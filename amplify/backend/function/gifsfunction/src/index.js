const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

exports.handler = (event, _, callback) => {
  const { GIPHY_API_KEY } = process.env;
  let apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=hello`;

  if (event.arguments) {
    const { searchTerm = "hi", limit = 25 } = event.arguments;
    apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${searchTerm}&limit=${limit}`;
  }

  axios
    .get(apiUrl)
    .then(response => callback(null, response.data.data))
    .catch(err => callback(err));
};
