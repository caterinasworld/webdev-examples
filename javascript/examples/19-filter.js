console.log('\n========== JavaScript filter() ==========\n');

const colors = ['red', 'yellow', 'blue', 'magenta', 'black', 'aquamarine'];

const long = colors.filter((word) => word.length > 6);

console.log(colors);
// [ 'red', 'yellow', 'blue', 'magenta', 'black', 'aquamarine' ]

console.log(long);
// [ 'magenta', 'aquamarine' ]

const characters = [
  { id: 1, name: 'Arya', house: 'Stark' },
  { id: 4, name: 'Sansa', house: 'Stark' },
  { id: 16, name: 'Eddard', house: 'Stark' },
  { id: 17, name: 'Catelyn', house: 'Stark' },
  { id: 20, name: 'Robb', house: 'Stark' },
];

// Return an array containing only the characters with odd ids
const odds = characters.filter((item) => item.id % 2 !== 0);

console.log(odds);
// [
//   { id: 1, name: 'Arya', house: 'Stark' },
//   { id: 17, name: 'Catelyn', house: 'Stark' }
// ]
