// Andrew Creekmore
// CS 361 
// Fall 2021

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.static('public'));
app.set('view engine', 'ejs');

const got = require('got')
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const heroku_url= 'https://mighty-beyond-55909.herokuapp.com/';

got(heroku_url).then(response => {
  const dom = new JSDOM(response.body);
  console.log(dom.window.document.querySelector('title').textContent);
}).catch(err => {
  console.log(err);
});

// define default route
app.get('/', (req, res) => res.render('index'))

app.listen(port, () => console.log(`App listening at http://localhost:${port}; ctrl + C to stop.`));


// array to hold task items
let tasks = [];

// creates new task using text entered into text input + adds it to 'tasks' array
function addTask(text) {
    const task = {
        text,
        checked: false,
        id: Date.now(),
    };

    tasks.push(task);
    console.log(tasks);
}



    //  // select form element
    //  const form = document.querySelector('.js-form');
    //  // add submit event listener
    //  form.addEventListener('submit', event =>{
    //      // no page auto-refresh on submit
    //      event.preventDefault();
    //      // select text input
    //      const input = document.querySelector('.js-task-input');
     
    //      // get input value
    //      const text = input.value.trim();
    //      if (text !== '') {
    //          addTask(text);
    //          input.value = '';
    //          input.focus();
    //      }
    //  });