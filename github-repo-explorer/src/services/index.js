const axios = require("axios");

const baseUrl = "https://api.github.com/search/users";

async function getUserDetails(searchParam, numberOfPages, numberOfResults) {
  try {
    var callOptions = {
      url:
        baseUrl +
        `?q=${searchParam}+repos:>0&page=${numberOfPages}&per_page=${numberOfResults}`,
      method: "GET",
    };
    let userDetails = await axios(callOptions);
    return userDetails;
  } catch (error) {
    console.log(error);
  }
}

async function getUserRepoDetails(username) {
  try {
    var callOptions = {
      url: `https://api.github.com/users/${username}/repos`,
      method: "GET",
    };
    let repoDetails = await axios(callOptions);
    return repoDetails;
  } catch (error) {
    console.log(error);
  }
}

export { getUserDetails, getUserRepoDetails };
