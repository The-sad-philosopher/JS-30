const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

async function fetchData() {
  try {
    const response = await fetch(endpoint);
    const cities = await response.json();
    console.table(cities);
  } catch (err) {
    console.error(err);
  }
}

function findMatches(wordToMatch, cities) {
  return cities.filter((city) => {
    // somethin
  });
}

fetchData();
