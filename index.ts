#!/usr/bin/env node 

import inquirer from "inquirer";

const randomnumber =Math.floor(Math.random()*6 + 1 );

const answer= await inquirer.prompt([

{
    name: "userGuessNumber",
    type: "number",
    message: "please guess a number between 1 to 6",

},
])

// console.log(answer);

if(answer.userGuessNumber===randomnumber)
{
    console.log("Congratulation!! Your Guess is Correct");
    
}

else 
{console.log("Your Guess Wrong Number");}


