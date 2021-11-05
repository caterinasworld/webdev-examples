// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

// Option #1
// Fetch JavaScript objects representing specific elements in the DOM
let userInput1 = document.querySelector('#userInput1');
let copy = document.querySelector('#copy');
let output1 = document.querySelector('#output1');

// Add an event listener on the target element
copy.addEventListener('click', handleClick);

// Callback function to handle event
function handleClick(event) {
  console.log('click event', event);
  output1.textContent = userInput1.value;
}

// Option #2
// document.getElementById('copy').onclick = () => {
//   let userInput = document.getElementById('userInput1');
//   let output = document.getElementById('output');

//   output.textContent = userInput.value;
// };

// Option #3
// document.getElementById('copy').onclick = () => {
//   document.getElementById('output').textContent = document.getElementById(
//     'userInput1'
//   ).value;
// };

// Exercise #2:
// When the user enters input text, copy the user input to the output area

// Fetch JavaScript objects representing specific elements in the DOM
let userInput2 = document.querySelector('#userInput2');
let output2 = document.querySelector('#output2');

// Add an event listener on the target element
userInput2.addEventListener('input', handleInput);

// Callback function to handle event
function handleInput(event) {
  console.log('click event', event);
  output2.textContent = userInput2.value;
}
