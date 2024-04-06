#! /usr/bin/env node
import inquirer from "inquirer";

let currencyExchange : any = {
    USD : 1, //Base currency
    GBP : 0.79,
    EURO : 0.93,
    INR : 83.30,
    PAK : 277.9,
    SAR : 3.78,
    CNY : 7.20,
    JPY : 144.46,
    AED : 3.68,
}
let userAnswer = await inquirer.prompt([
    {
        name : "fromCurrency",
        message : "Select Currency You want to exchange!",
        type : "list",
        choices : ["USD", "GBP", "EURO", "INR", "PAK", "SAR", "CNY", "JPY", "AED"],
    },
    {
        name : "toCurrency",
        message : "Select Currency You want to get!",
        type : "list",
        choices : ["USD", "GBP", "EURO", "INR", "PAK", "SAR", "CNY", "JPY", "AED"],
    },
    {
        name : "amount",
        message : "Enter amount you want to exchange",
        type : "number",
    }]);

    let fromCurExRate = currencyExchange[userAnswer.fromCurrency];
    let toCurExRate = currencyExchange[userAnswer.toCurrency];
    let userAmount = userAnswer.amount;
    let baseAmount = userAmount / fromCurExRate;
    let currencyExchangeAmount = baseAmount * toCurExRate;
    console.log(currencyExchangeAmount);
    