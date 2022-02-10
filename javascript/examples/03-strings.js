console.log('\n========== JavaScript Strings ==========\n');

// Defining Strings

const quote1 = 'All that is gold does not glitter';

// prettier-ignore
const quote2 = "Not all those who wander are lost";

const quote3 = `All that is gold does not glitter,
Not all those who wander are lost;
The old that is strong does not wither,
Deep roots are not reached by the frost.

From the ashes a fire shall be woken,
A light from the shadows shall spring;
Renewed shall be blade that was broken,
The crownless again shall be king.`;

const author = new String('-- J.R.R. Tolkien, The Fellowship of the Ring');

console.log(quote1, '\n');
// All that is gold does not glitter

console.log(quote2, '\n');
// Not all those who wander are lost

console.log(quote3, '\n');
// All that is gold does not glitter,
// Not all those who wander are lost;
// The old that is strong does not wither,
// Deep roots are not reached by the frost.

// From the ashes a fire shall be woken,
// A light from the shadows shall spring;
// Renewed shall be blade that was broken,
// The crownless again shall be king.

console.log(author, '\n');
// [String: '-- J.R.R. Tolkien, The Fellowship of the Ring']

// String Methods

console.log('Length of quote:', quote1.length);
// Length of quote: 34

console.log('Index of "gold":', quote1.indexOf('gold'));
// Index of "gold": 12

console.log('Index of "wander":', quote1.indexOf('wander'));
// Index of "wander": -1
// --> no such index

console.log('Substring starting at index 6:', quote1.substr(6));
// Substring starting at index 6: at is gold does not glitter

console.log('Substring from index 0 to index 5:', quote1.substr(0, 5));
// Substring from index 0 to index 5: All t

console.log('Quote ends with "glitter":', quote1.endsWith('glitter'));
// Quote ends with "glitter": true

console.log('Quote starts with "gold":', quote1.startsWith('gold'));
// Quote starts with "gold": false

console.log('Split quote:', quote1.split(' '));
// [ 'All', 'that', 'is', 'gold', 'does', 'not', 'glitter' ]

console.log('Join with dashes:', quote1.split(' ').join(' - '));
// All - that - is - gold - does - not - glitter
