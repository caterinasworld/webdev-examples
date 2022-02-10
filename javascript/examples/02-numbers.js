console.log('\n========== JavaScript Numbers ==========\n');

const num1 = 15;
const num2 = 15.0;
const num3 = 15e8;
const num4 = 15 / 0;
const num5 = -15 / 0;
const num6 = 16 / 'abc';
const num7 = Number.MAX_SAFE_INTEGER;
const num8 = Number.MIN_SAFE_INTEGER;

console.log(num1);
// 15

console.log(num2);
// 15

console.log(num3);
// 1500000000

console.log(num4);
// Infinity

console.log(num5);
// -Infinity

console.log(num6);
// NaN

console.log(num7);
// 9007199254740991

console.log(num8);
// -9007199254740991
