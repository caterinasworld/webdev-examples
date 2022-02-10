console.log('\n========== JavaScript map() ==========\n');

const numbers = [1, 2, 3, 4, 5, 6];

// Return an array with the double of each item in the numbers array
const doubles = numbers.map((item) => item * 2);

console.log(numbers);
// [ 1, 2, 3, 4, 5, 6 ]

console.log(doubles);
// [ 2, 4, 6, 8, 10, 12 ]

const characters = [
  { id: 1, name: 'Arya', house: 'Stark' },
  { id: 4, name: 'Sansa', house: 'Stark' },
  { id: 16, name: 'Eddard', house: 'Stark' },
  { id: 17, name: 'Catelyn', house: 'Stark' },
  { id: 20, name: 'Robb', house: 'Stark' },
];

// Return an array with each name in the characters array in uppercase format
const uppercase = characters.map((item) => item.name.toUpperCase());

console.log(uppercase);
// [ 'ARYA', 'SANSA', 'EDDARD', 'CATELYN', 'ROBB' ]
