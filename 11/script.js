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
  countriesContainer.style.opacity = 1;
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

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};

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

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       console.log(pos.coords.latitude, pos.coords.longitude);
//       return fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
//     })
//     .then(response => {
//       if (response.status == 403) throw new Error(`You're reloading too fast!`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city} ${data.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//       // renderCountry(data.country);
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data[0]);
//       renderCountry(data[0]);
//       countriesContainer.style.opacity = 1;
//     })
//     .catch(err => console.log(err.message));
// };

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

////////////////////////////////////
//////// CODING CHALLENGE #2 ///////
////////////////////////////////////

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', () => {
      imgContainer.append(image);
      resolve(image);
    });

    image.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

// createImage('img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-3.jpg');
//   })
//   .catch(err => console.log(err.message));
// .then(res => wait(2, res))
// .then(() => createImage('img/img-3.jpg'));

////////////////////////////////////
////// BUILDING OWN PROMISES ///////
////////////////////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is happening`);

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN ');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err.message));

// console.log('siema');

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 second'));

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 second passed');
//   });

// Promise.resolve('abc').then((res) => console.log(res));

////////////////////////////////////
////////// PROMISIFYING ////////////
////////////////////////////////////

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(res => console.log(res.coords));
// whereAmI();

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// const whereAmI = async function (country) {
//   try {
//     // const pos = await getPosition();
//     // const { latitude: lat, longitude: lng } = pos.coords;

//     // // geolocation
//     // const geo = await fetch(`https://geocode.xyz/${lat},${lng}?json=1`);
//     // const dataGeo = await geo.json();
//     // if (!dataGeo.ok)
//     //   throw new Error('Something went wrong with getting geo data');
//     // console.log('DATAGEO', dataGeo);

//     // get country data
//     const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//     console.log('RES', res);
//     const [data] = await res.json();
//     console.log('DATA', data);
//     renderCountry(data);
//     return `You are in ${data.altSpellings[2]}`;
//   } catch (err) {
//     throw err;
//   }
// };

// whereAmI('polansd')
//   .then(txt => console.log(txt))
//   .catch(err => console.log(`${err.message} 😎😎😎`))
//   .finally(() => console.log('finally'));

// console.log(`1: Start`);
// (async function () {
//   try {
//     const txt = await whereAmI('poland');
//     console.log(`2: ${txt}`);
//   } catch (err) {
//     console.log(`2: ${err} 🍪🍪🍪`);
//   }
//   console.log(`3: Finally`);
// })();

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     // return all promises if no one rejected
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data);
//     console.log(data.flatMap(d => d[0].capital));
//   } catch (err) {
//     console.log(err);
//   }
// };

// get3Countries('poland', 'spain', 'switzerland');

// (async function () {
//   const [res] = await Promise.race([
//     getJSON(`https://restcountries.com/v3.1/name/croatia`),
//     getJSON(`https://restcountries.com/v3.1/name/russia`),
//     getJSON(`https://restcountries.com/v3.1/name/egypt`),
//   ]);
//   console.log(res);
// })();

// const timeout = function (sec) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error('Request took too long'));
//     }, sec * 1000);
//   });
// };

// // return 1 promise that is the fastest
// Promise.race([
//   getJSON(`https://restcountries.com/v3.1/name/croatia`),
//   getJSON(`https://restcountries.com/v3.1/name/russia`),
//   timeout(1),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err.message));

// // return all promises even some of them is rejected
// Promise.all([
//   Promise.resolve('success'),
//   Promise.resolve('siema'),
//   Promise.reject('nie ma'),
// ])
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

////////////////////////////////////
//////// CODING CHALLENGE #3 ///////
////////////////////////////////////

// const loadNPause = async function () {
//   try {
//     let img = await createImage('img/img-1.jpg');
//     currentImg = img;
//     await wait(2);
//     currentImg.style.display = 'none';
//     img = await createImage('img/img-2.jpg');
//     currentImg = img;
//     await wait(2);
//     currentImg.style.display = 'none';
//     img = await createImage('img/img-3.jpg');
//     currentImg = img;
//     await wait(2);
//     currentImg.style.display = 'none';
//   } catch (err) {
//     console.log(err);
//   }
// };

// loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgsObjs = await Promise.all(imgs);
    imgsObjs.forEach(img => img.classList.add('paralell'));
    console.log(imgsObjs);
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
