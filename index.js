const express = require('express');
const mongoose = require('mongoose');
const Card = require('./models');

const PORT = process.env.PORT || 5000;

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header('Access-Control-Allow-Methods', 'POST, GET');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://admin:ylVLmdVZf802C7qS@cluster0.kpuhg.mongodb.net/creditsCards', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    })
  } catch (error) {
    console.log(error);
  }
}

app.get('/', async (req, res) => {
  const cards = await Card.find({});
  res.send(cards);
})

console.log("bbbbbbbbbbbbbbbbbbbb");
console.log("aaaaaaaaaaaaaaaaa");


app.post('/', async (req, res) => {
  const newCard = new Card(req.body)
  await newCard.save();
  res.send('card save');
})


start();
