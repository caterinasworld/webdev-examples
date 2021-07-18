// ***************************************
// ES6 template literals
// ***************************************
const addNewline = () => {
  console.log('============');
};

const str1 = `template literal`;

console.log(str1); // template literal

// ***************************************
// ES5 multi-line strings
// ***************************************
var str2 = 'first line\n \
  second line';

var str3 = 'first line\n' + 'second line';

addNewline();
console.log(str2);
// first line
//   second line

addNewline();
console.log(str3);
// first line
// second line

// ***************************************
// ES6 multiline strings with template literals
// ***************************************
const str4 = `Hey
This multiline string
is awesome!`;

addNewline();
console.log(str4);
// Hey
// this multiline string
// is awesome!

// ***************************************
// ES6 string interpolation
// ***************************************
const str5 = 'string interpolation';
const str6 = `testing ${str5}`;

addNewline();
console.log(str6);
// testing string interpolation
