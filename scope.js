const pi = 3.14;

add(2, 3);
function add(a, b) {
  const factor = 0.5;
  const total = (a + b) * factor + pi;
// scope is the area where a variable is defined and can be accessed! there are two types of scope in js global scope and local scope! global scope is the area outside of any function and local scope is the area inside a function! variables defined in the global scope can be accessed anywhere in the code but variables defined in the local scope can only be accessed inside that function!
  return total;
}
