const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');
app.style.paddingLeft = 0;
const loading = document.querySelector('#loading');

const addBookToDOM = (item) => {
  console.log(item);
  let element = document.createElement('div');
  let title = document.createElement('h4');
  let author = document.createElement('p');
  let published = document.createElement('p');
  let pages = document.createElement('p');

  element.style.display = 'flex';
  element.style.flexDirection = 'column';
  element.style.alignItems = 'center';
  element.style.marginTop = '20px';

  title.textContent = item.name;
  author.textContent = `by ${item.authors[0]}`;
  published.textContent = item.released.substr(0, 4);
  pages.textContent = `${item.numberOfPages} pages`;

  element.append(title);
  element.append(author);
  element.append(published);
  element.append(pages);

  app.append(element);
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // check the format of the data
      // if data is in array format, we can use an array method such as forEach()
      data.forEach((item) => {
        addBookToDOM(item);
      });
    })
    .catch((error) => {
      console.log(error);
      let div = document.createElement('div');
      div.textContent = `An error occurred. Please try again.`;
      app.append(div);
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

fetchData(url);
