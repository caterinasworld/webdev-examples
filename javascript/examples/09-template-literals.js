console.log('\n========== JavaScript Template Literals ==========\n');

console.log('========== ES6 Template Literals ==========');

const str1 = `template literal`;

console.log(str1);
// template literal

console.log('\n========== ES5 Multi-line Strings - Option 1 ==========');

var str2 = 'first line\n \
  second line';

console.log(str2);
// first line
//   second line

console.log('\n========== ES5 Multiline Strings - Option 2 ==========');

var str3 = 'first line\n' + 'second line';

console.log(str3);
// first line
// second line

console.log(
  '\n========== ES6 Multiline Strings with Template Literals =========='
);

const str4 = `Hey
This multiline string
is awesome!`;

console.log(str4);
// Hey
// this multiline string
// is awesome!

console.log('\n========== ES6 String Interpolation ==========');

const str5 = 'string interpolation';
const str6 = `testing ${str5}`;

console.log(str6);
// testing string interpolation
