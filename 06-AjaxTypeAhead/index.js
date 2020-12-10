const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchBar = document.querySelector('.search-bar');
const suggestionList = document.querySelector('.suggestion-list');

fetchData();
searchBar.addEventListener('change', displayMatches);
searchBar.addEventListener('keyup', displayMatches);

async function fetchData() {
  try {
    const response = await fetch(endpoint);
    cities.push(...(await response.json()));
  } catch (err) {
    console.error(err);
  }
}

function addCommaToNumbers(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function displayMatches() {
  const matchedPlaces = findMatches(this.value, cities);
  const list = matchedPlaces
    .map((matchedPlace) => {
      const regexHighlight = new RegExp(this.value, 'gi');
      const cityName = matchedPlace.city.replace(
        regexHighlight,
        `<span class="highlight">${this.value}</span>`
      );
      const stateName = matchedPlace.state.replace(
        regexHighlight,
        `<span class="highlight">${this.value}</span>`
      );
      const population = addCommaToNumbers(matchedPlace.population);
      return `
            <li>
              <span> ${cityName}, ${stateName} </span>
              <span> ${population} </span>
            </li>
          `;
    })
    .join('');
  suggestionList.innerHTML = list;
}
