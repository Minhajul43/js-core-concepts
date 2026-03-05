const numbers = [1, 2, 3, 4, 5];

let doubled = [];

// for (const num of numbers) {
//   doubled.push(num * 2);
// }

// console.log(doubled);

const doubleIt = num => num * 2;
doubled = numbers.map(doubleIt);

// console.log(doubled);

doubled = numbers.map(num => num * 2);

// console.log(doubled);

let square = [];
square = numbers.map(num => num * num);

// console.log(square);

// array of strings

const friend = ['Minhajul', 'Juel', 'Tahmeed', 'Neha'];

const firstLetter = friend.map(fr => fr[0]);

// console.log(firstLetter);


// array of objects

const products = [
  { name: 'phone', price: 10000 },
  { name: 'laptop', price: 10000 },
  { name: 'tablet', price: 10000 },
  { name: 'watch', price: 10000 },
  { name: 'headphones', price: 10000 }
]

const prices = products.map(pd => pd.price*2);
console.log(prices);


// write short description about map! map is a higher-order function that takes a callback function as an argument and applies it to each element of an array, returning a new array with the results! in the above example we have an array of numbers and we use the map method to create a new array called doubled that contains the double of each number in the original array! we can also use map to create a new array of squares or to extract specific properties from an array of objects! in the last example we have an array of products and we use map to create a new array called prices that contains the double of the price of each product! the map method does not modify the original array, it returns a new array with the transformed values! it is a very useful method for transforming data in arrays and is widely used in JavaScript programming!

