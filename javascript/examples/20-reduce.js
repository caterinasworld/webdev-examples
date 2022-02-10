console.log('\n========== JavaScript reduce() ==========\n');

// Initial array
const array = [1, 2, 3, 4, 5, 6];

// Reducer function
const reducer = (accumulator, current) => accumulator + current;

let sum = array.reduce(reducer);

console.log(sum);
// 21

sum = array.reduce(reducer, 50);

console.log(sum);
// 71

const characters = [
  { id: 1, name: 'Arya', house: 'Stark' },
  { id: 4, name: 'Sansa', house: 'Stark' },
  { id: 16, name: 'Eddard', house: 'Stark' },
  { id: 17, name: 'Catelyn', house: 'Stark' },
  { id: 20, name: 'Robb', house: 'Stark' },
];

// Return the sum of all ids in the characters array
const ids = characters.reduce((acc, curr) => acc + curr.id, 0);

console.log(ids);
// 58
