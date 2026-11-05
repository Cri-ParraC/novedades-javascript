const wait = ms => new Promise(resolve => setTimeout(() => resolve(`Waited ${ms}ms`), ms));

wait(100)
  .then(message => console.log(message)) // => Waited 100ms
  .catch(error => console.error(error));
