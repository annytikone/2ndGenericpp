import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log(
    ' app on 3000 !,changed node --v t  o 9 from 12 as  husky runs  below 12'
  );
});

const sayHello = 'airbnb    rule';
console.log(sayHello);
