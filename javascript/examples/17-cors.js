// Dog Facts API - CORS issue
const url =
  'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all/facts/';

let fetchDogFacts = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.group('Fetch dog facts');
      console.error(error);
      console.groupEnd();
    });
};

fetchDogFacts(url);
// This will return a CORS error
// Comment this call out to see the program run wihtout the CORS error
