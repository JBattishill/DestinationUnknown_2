// dotenv used if apiKey needed
// require('dotenv').config();

// 11ty Fetch is used to API calls
const EleventyFetch = require("@11ty/eleventy-fetch");

// Not used yet...
// const address = '';
// const suburb = '';
// const architect = '';
// const equator = '0'


// async function to get location details
async function getLocation({}) {

    //pull data from GeoApify - London only, limited to 1 response, formatted in JSON
    const url = 'https://api.geoapify.com/v1/geocode/search?text=london&limit=1&format=json&apiKey=234979e2ff9e423095e4b2c869c1c97b'

    const response = EleventyFetch(url, {
        duration: "1d", // save for 1 day - change to h for hours
        type: "json",
});
// name data reponse apiData for clarity
const apiData = response;
let tempHemisphere = "";
const locationLat = apiData.lat1;

// target latitude
if (locationLat > 0)
    console.log ("North"),
    tempHemisphere = "Northern",
    console.log (apiData.lat1);

else 
    console.log ("South"),  
    tempHemisphere = "Southern"
    console.log (apiData.lat1);

const hemisphere = tempHemisphere

return hemisphere, apiData;
}

module.exports = getLocation;