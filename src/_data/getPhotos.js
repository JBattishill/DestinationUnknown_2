// // dotenv used if apiKey needed
// require('dotenv').config();

// // testing dotenv can call correct API Key
// console.log(process.env.PEXEL_KEY)

// // 11ty Fetch is used to API calls
// const EleventyFetch = require("@11ty/eleventy-fetch");
// const createClient = require("pexels");
// const client = getPhotos(process.env.PEXEL_KEY);
// const query = 'London Winter';
// const sepPhotoStorage = [];


// // Not used yet...
// // const address = '';
// // const suburb = '';
// // const architect = '';
// // const equator = '0'


// // async function to get location details

// async function getPhotos({}) {
    

    
//     const url = 'https://api.pexels.com/v1/search'

//     setTimeout(createClient),1000
//     (client.photos.search({ query, per_page: 1 }).then(photos => sepPhotoStorage = photos));

//     const photoStorage = photos

//     console.log("photoStorage")
//     console.log(photoStorage)

//     console.log("sepPhotoStorage") 
//     console.log(sepPhotoStorage) 

//     return photoStorage;
 
// }

// module.exports = getPhotos


// // // async function to get location details
// // async function getPhotos({}) {

// //     //pull data from GeoApify - London only, limited to 1 response, formatted in JSON
// //     const url = 'https://api.pexels.com/v1/search'

// //     const response = EleventyFetch(url, {
// //         duration: "1d", // save for 1 day - change to h for hours
// //         type: "json",
// // });

// // const apiData = response

// // return apiData;
// // }

