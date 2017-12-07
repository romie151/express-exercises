const express = require('express');
const calc = express();
const port = 8000;

// var operator = ["add", "div", "mult", "sub"];
// var operatorSymbol = ["+", "-", "/", "*"];

calc.get('/', (req, res) => {
    res.send("hello world")
})

calc.get('/add/:num1/:num2', (req, res) => {
        res.send(`add: ${Number(req.params.num1) + Number(req.params.num2)}`)
})

calc.get('/sub/:num1/:num2', (req, res) => {
    res.send(`{num1: ${Number((req.params.num1))}, num2: ${Number((req.params.num2))}, result: ${Number((req.params.num1)) - Number((req.params.num2))}}`)
})

calc.get('/mult/:num1/:num2', (req, res) => {
    res.send(`{num1: ${Number((req.params.num1))}, num2: ${Number((req.params.num2))}, resut: ${Number((req.params.num1)) * Number((req.params.num2))}}`)
})

calc.get('/div/:num1/:num2', (req, res) => {
    res.send(`{num1: ${Number((req.params.num1))}, num2: ${Number((req.params.num2))}, div: ${Number((req.params.num1)) / Number((req.params.num2))}}`)
})

calc.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
})