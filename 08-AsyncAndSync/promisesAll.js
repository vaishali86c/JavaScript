
const promise1 = Promise.resolve('One');
const promise2 = Promise.resolve('Two');

Promise.all([promise1, promise2])
  .then((values) => {
    console.log(values); // Output: ['One', 'Two']
  })
  .catch((error) => {
    console.error(error);
  });

