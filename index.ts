#! /usr/bin/env node

//  Friend Checker Game

import inquirer from "inquirer" 

let Friend = await inquirer.prompt([{
    name:"Name",

    type: "string",

    message : "Enter Your Friend Name"

}]);

if (Friend.name === "Farhan" || Friend.name === "Saad"){

    console.log(`${Friend.name} Is Your Friend`);

} else {

    console.log(` ${Friend.name} Is Not Your Friend`);

};