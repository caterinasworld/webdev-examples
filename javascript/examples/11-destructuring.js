console.log('\n========== JavaScript Destructuring ==========\n');

const character = {
  first: 'Daenerys',
  last: 'Targaryen',
  house: 'Targaryen',
  parents: {
    mother: 'Queen Rhaella',
    father: 'King Aerys II',
  },
};

// Destructuring the first name and house
const { first, house } = character;

// Destructuring the parents
const { mother, father } = character.parents;

console.log(
  `I am ${first} of house ${house}, daughter of ${mother} and ${father}.`
);
// I am Daenerys of house Targaryen, daughter of Queen Rhaella and King Aerys II.
