// An API of Fire and Ice
// Endpoint for the first book
const url = 'https://anapioficeandfire.com/api/books/1/';

// Ajax implementation with XMLHttpRequest
// XMLHttpRequest is a built-in browser object lows to make HTTP requests
let xhrExample = (url) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.send();

  xhr.onload = () => {
    console.group('Ajax Implementation with XMLHttpRequest');
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log('Status: ', xhr.status);
    } else {
      console.error(`Status Code: ${xhr.status} - ${xhr.statusText}`);
    }
    console.groupEnd();
  };
};

// Ajax implementation with jQuery
let jQueryAjaxExample = (url) => {
  $.get(url, (data, status) => {
    console.group('jQuery Ajax Implementation');
    console.log(data);
    console.log('Status: ', status);
    console.groupEnd();
  });
};

// Ajax implementation with Fetch() API
let fetchExample = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.group('Fetch() API Implementation');
      console.log(data);
      console.groupEnd();
    })
    .catch((error) => console.error(error));
};

// Ajax implementation with XMLHttpRequest
xhrExample(url);

// Ajax implementation with jQuery
// Must import jQuery for this implementation
jQueryAjaxExample(url);

// Ajax implementation with Fetch() API
fetchExample(url);
