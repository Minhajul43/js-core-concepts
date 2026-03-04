function firstSum(arr1, arr2) {
  arr1[0] = 100;
  arr2[0] = 200;

  console.log(arr1, arr2);

}

const number1 = [1, 2, 3];
const number2 = [4, 5, 6];

console.log('Before calling function:', number1, number2);
firstSum(number1, number2);
console.log('After calling function:', number1, number2);

// write description about pass by reference! when we pass an array or an object to a function it is passed by reference which means that the function can modify the original array or object! in the above example we have two arrays number1 and number2! when we call the function firstSum and pass these arrays as arguments it modifies the first element of both arrays! so when we log the arrays after calling the function we can see that the first element of both arrays has been changed! this is because they are passed by reference! if we had passed primitive data types like numbers or strings they would have been passed by value which means that the function would not be able to modify the original value!