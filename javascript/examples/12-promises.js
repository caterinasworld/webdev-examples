console.log('\n========== JavaScript Promises ==========\n');

const promiseExample = () => {
  const promise = new Promise((resolve, reject) => {
    if (true) {
      resolve('Successful promise.');
    } else {
      reject('Error: Something went wrong.');
    }
  });

  promise
    .then((response) => {
      console.log(response);
      return response;
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error))
    .finally(() => {
      console.log(
        'This code will execute whether the promise is fulfilled or rejected.'
      );
    });
};

promiseExample();
