// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
// import * as ShoppingCart from './shoppingCart.js';
// import add from './shoppingCart.js';
import cloneDeep from 'lodash-es';

console.log('Importing module');
// console.log(ShoppingCart);
// add('Car', '2');
// console.log(ShoppingCart.totalPrice, ShoppingCart.qt);

const x = 2,
  y = 3,
  z = 5;
console.log(x, y, z);

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'apple', quantity: 2 },
  ],
  user: { loggedIn: true },
};

const getLastPost = async function () {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

// const lastPost = await getLastPost();
// console.log(lastPost);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 235;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('Bread', 3);
ShoppingCart2.addToCart('Apple', 5);
console.log(ShoppingCart2.totalPrice);

const stateClone = Object.assign({}, state);
console.log(stateClone);

const stateDeepClone = cloneDeep(state);
console.log(stateDeepClone);

state.user.loggedIn = false;
console.log(stateClone);

if (module.hot) {
  module.hot.accept();
}
