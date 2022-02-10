console.log('\n========== JavaScript Types ==========\n');

console.log(typeof 42);
// number

console.log(typeof 'blubber');
// string

console.log(typeof true);
// boolean

console.log(typeof someVariable);
// undefined

console.log(typeof 3.14);
// number

console.log(typeof 42n);
// bigint

console.log(typeof `template literal`);
// string

console.log(typeof infinity);
// undefined

console.log(typeof NaN);
// string

console.log(typeof true);
// boolean

console.log(typeof Symbol('foo'));
// symbol

function double(num) {
  return num * 2;
}

console.log(typeof double);
// function

console.log(typeof null);
// object

console.log(typeof {});
// object

console.log(typeof []);
// object

console.log(typeof undefined);
// undefined
