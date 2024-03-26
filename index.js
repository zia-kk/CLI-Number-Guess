#!/usr/bin/env node 

import inquirer from "inquirer";

import Chalk  from "chalk";

const randomnumber = Math.floor(Math.random() * 6+1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "please guess a number between 1 to 6:",
    },
]);
// console.log(answer);
if (answer.userGuessNumber === randomnumber) {
    console.log(Chalk.green (" \n Congratulation!! Your Guess is Correct"));

}
else {
    console.log(Chalk.red(" \n Your Guess Is Wrong Number,,,Plz Try Again"));
}


