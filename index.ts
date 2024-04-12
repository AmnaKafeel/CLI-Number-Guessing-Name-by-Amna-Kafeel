#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\tWelcome to Amna Kafeel ClI Number Guessing Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answers = await inquirer.prompt([{
    name: "userGuessNumber",
    type: "number",
    message: "Guess a number from 1 to 5:",

},
]);
if(answers.userGuessNumber === randomNumber){
    console.log("Congratulation! You guessed it right.:");
}
else{
    console.log("Sorry! You guessed it wrong, Try it again!");
}