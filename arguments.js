function add(num1, num2) {
  console.log(arguments);

  const args = [...arguments];
  console.log('args:', args);
  return num1 + num2;
}

add(2, 3);
add(4, 5, 6, 7);

// write description about arguments! arguments is an array-like object that contains the values of the arguments passed to a function! it is available inside every function and can be used to access the arguments passed to the function! in the above example we have a function add that takes two parameters num1 and num2! when we call the function add with different number of arguments it logs the arguments object which contains all the arguments passed to the function! we can also convert the arguments object to an array using the spread operator or using Array.from() method! in this example we use the spread operator to convert the arguments object to an array and log it! this way we can access all the arguments passed to the function even if they are more than the parameters defined in the function!