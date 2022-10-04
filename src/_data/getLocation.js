// dotenv used if apiKey needed
// require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

async function getBuildings() {
    // Not used yet...
    // const address = '';
    // const suburb = '';
    // const architect = '';

    const url = 'http://cm.beneb.com/wp-json/wp/v2/buildings/?per_page=20'

    const response = EleventyFetch(url, {
        duration: "1d", // save for 1 day - change to h for hours
        type: "json"
});

const apiData = response;
return apiData;
}

module.exports = getBuildings;