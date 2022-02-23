const { default: axios } = require("axios");

async function makeRequest() {
    // return the result:
    const response = axios.get('https://www.bbc.co.uk/news');
    return response;
}

module.exports = makeRequest;
