let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];
// these three dots can access values of object not pointer or storage
example2.push(7);
console.log(example1);
console.log(example2);

// another access by pointer
let example3 = example1;
example3.push(8);
console.log(example1); // now the pointer of example 1 and example 3 both are same.
// so if we add in example3 then it reflected in example1
