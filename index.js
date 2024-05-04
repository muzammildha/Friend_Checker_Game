"use strict";
//  Friend Checker Game
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Friend = await inquirer_1.default.prompt([{
        name: "Name",
        type: "string",
        message: "Enter Your Friend Name"
    }]);
if (Friend.name === "Farhan" || Friend.name === "Saad") {
    console.log("".concat(Friend.name, " Is Your Friend"));
}
else {
    console.log(" ".concat(Friend.name, " Is Not Your Friend"));
}
;
