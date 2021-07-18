const character = {
  first: 'Daenerys',
  last: 'Targaryen',
  house: 'Targaryen',
  parents: {
    mother: 'Queen Rhaella',
    father: 'King Aerys II',
  },
};

// Destructuring the full name
const { first, last, house } = character;

console.log(`I am ${first} ${last} of house ${house}.`);
