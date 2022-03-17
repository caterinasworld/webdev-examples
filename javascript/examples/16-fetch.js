// An API of Fire and Ice
// Endpoints for the first four books
const book1 = 'https://anapioficeandfire.com/api/books/1/';
const book2 = 'https://anapioficeandfire.com/api/books/2/';
const book3 = 'https://anapioficeandfire.com/api/books/3/';
const book4 = 'https://anapioficeandfire.com/api/books/4/';
const book5 = 'https://anapioficeandfire.com/api/books/5/';

// Endpoints for all books
const allbooks = 'https://anapioficeandfire.com/api/books/';

// Fetch One Book - Promise Implementation
const fetchOnePromiseExample = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.group('Fetch One Book - Promise Implementation');
      console.log(data.name);
      console.log(data.authors[0]);
      console.log(data.numberOfPages);
      console.groupEnd();
    })
    .catch((error) => console.error(error))
    .finally(() =>
      console.log('Fetch One Book - Promise Implementation - finally block')
    );
};

// Fetch ALl Books - Promise Implementation
const fetchAllPromiseExample = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.group('Fetch All Books - Promise Implementation');
      console.log('Data', data); // array of 10 objects
      data.forEach((item) => {
        // console.log(item.name);
        console.log(
          `${item.name} - ${item.authors[0]} - ${item.numberOfPages} pages`
        );
      });
      console.groupEnd();
    })
    .catch((error) => console.error(error))
    .finally(() =>
      console.log('Fetch All Books - Promise Implementation - finally block')
    );
};

// Fetch One Book - Async/Await Implementation
const fetchOneAsyncAwaitExample = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.group('Fetch One Book - Async/Await Implementation');
    console.log(data.name);
    console.log(data.authors[0]);
    console.log(data.numberOfPages);
    console.groupEnd();
  } catch (error) {
    console.error('Request failed', error);
  } finally {
    console.log('Fetch One Book - Async/Await Implementation - finally block');
  }
};

// Fetch All Books - Async/Await Implementation
const fetchAllAsyncAwaitExample = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.group('Fetch All Books - Async/Await Implementation');
    data.forEach((item) => {
      // console.log(item.name);
      console.log(
        `${item.name} - ${item.authors[0]} - ${item.numberOfPages} pages`
      );
    });
    console.groupEnd();
    console.groupEnd();
  } catch (error) {
    console.error('Request failed', error);
  } finally {
    console.log('Fetch All Books - Async/Await Implementation - finally block');
  }
};

// Fetch Five Books - Async/Await Promise.all() Implementation
const fetchAsyncAwaitPromiseAllExample = async (urls) => {
  try {
    const response = await Promise.all(urls.map((url) => fetch(url)));
    const data = await Promise.all(response.map((res) => res.json()));
    console.group(
      'Fetch Five Books - Async/Await with Promise.all() Implementation'
    );
    console.log(data);
    console.groupEnd();
  } catch (error) {
    console.error('Request failed', error);
  } finally {
    console.log(
      'Fetch Five Books - Async/Await with Promise.all() Implementation - finally block'
    );
  }
};

const fivebooks = [book1, book2, book3, book4, book5];

// Fetch One Book - Promise Implementation
fetchOnePromiseExample(book1);

// Fetch ALl Books - Promise Implementation
fetchAllPromiseExample(allbooks);

// Fetch One Book - Async/Await Implementation
fetchOneAsyncAwaitExample(book1);

// Fetch All Books - Async/Await Implementation
fetchAllAsyncAwaitExample(allbooks);

// Fetch Five Books - Async/Await Promise.all() Implementation
fetchAsyncAwaitPromiseAllExample(fivebooks);
