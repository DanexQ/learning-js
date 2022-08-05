'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, neighbour = false) {
  const html = `
    <article class="country ${neighbour && 'neighbour'}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population).toFixed(
              0
            )}</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
        </div>
    </article>`;
  console.log(data);
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     // render main country
//     renderCountry(data);

//     const neighbour = data.borders;
//     if (!neighbour) return;
//     console.log(...neighbour);
//     const neighboursRequest = new XMLHttpRequest();
//     console.log(
//       `https://restcountries.com/v3.1/alpha?codes=${neighbour.join(',')}`
//     );
//     neighboursRequest.open(
//       'GET',
//       `https://restcountries.com/v3.1/alpha?codes=${neighbour.join(',')}`
//     );
//     neighboursRequest.send();

//     neighboursRequest.addEventListener('load', function () {
//       const neighbourData = JSON.parse(this.responseText);
//       neighbourData.forEach((country) => {
//         renderCountry(country, true);
//       });
//       console.log(neighbourData);
//     });
//   });
// };

// getCountryAndNeighbour('germany');

// const request = fetch(`https://restcountries.com/v3.1/name/poland`);
// console.log(request);

// const renderError = function (err) {
//   countriesContainer.style.display = 'flex';
//   countriesContainer.insertAdjacentText(
//     'beforeend',
//     `Something went wrong, ${err.message}`
//   );
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then((response) => {
//     if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => {
//       if (!response.ok)
//         throw new Error(`Country not found! (${response.status})`);
//       response.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       console.log(neighbour);
//       return fetch(`https://restcountries.com/v3.1/alpha?codes=${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0], true))
//     .catch((err) => {
//       console.log(`${err} 💣💣💣`);
//       renderError(err);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       // if (!neighbour) throw new Error('No neighbour found!');

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha?codes=${neighbour}`,
//         'No neighbour found!'
//       );
//     })
//     .then((data) => renderCountry(data[0], true))
//     .catch((err) => {
//       console.log(`${err} 💣💣💣`);
//       renderError(err);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function (e) {
//   e.preventDefault();
//   getCountryData('australia');
// });

////////////////////////////////////
//////// CODING CHALLENGE #1 ///////
////////////////////////////////////

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?json=1`)
//     .then((response) => {
//       if (response.status == 403) throw new Error(`You're reloading too fast!`);
//       return response.json();
//     })
//     .then((data) => {
//       console.log(`You are in ${data.city} ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//       // renderCountry(data.country);
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//       countriesContainer.style.opacity = 1;
//     })
//     .catch((err) => console.log(err.message));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

////////////////////////////////////
////// BUILDING OWN PROMISES ///////
////////////////////////////////////

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log(`Lottery draw is happening`);

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN ');
    } else {
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err.message));

console.log('siema');

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 1 second'));

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 second passed');
  });

Promise.resolve('abc').then((res) => console.log(res));
