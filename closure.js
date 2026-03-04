function counter(owner) {
  let count = 0;
  function increment() {
    count++;
    console.log('This is increment number', owner , count);
  }
  return increment;
}


const counterRahim = counter('Rahim');
counterRahim();
counterRahim();
counterRahim();
counterRahim();

const counterKarim = counter('Karim');
counterKarim();
counterKarim();
counterKarim();

counterRahim();
counterRahim();
// const count1 = counter();
// count1();
// count1();
// count1();

// write some description about closure! closure is a function that has access to the variables in its outer scope even after the outer function has returned! in the above example counter is the outer function and increment is the inner function! counter returns the increment function and increment has access to the count variable which is defined in the outer scope! when we call counterRahim() it increments the count variable and logs the current count for Rahim! when we call counterKarim() it increments the count variable and logs the current count for Karim! even though counterRahim and counterKarim are different functions they both have access to the same count variable because they are created by the same outer function counter!