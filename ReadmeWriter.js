const inquirer = require('inquirer');
let fs = require('fs');


inquirer
    .prompt([
        {
            type: "input",
            message:"What is the name of your program?",
            name: "programName",
        },
        {
            type: "input",
            message: "Please provide a description of your program",
            name: "title",
        },
        {
            type: "input",
            message: "Please enter your Table of Contents",
            name: "tableOfContents"
        },
        {
            type: "input",
            message: "What steps are necessary for installation?",
            name: "installation"
        },
        {
            type: "input",
            message: "How should the User use your application?",
            name: "usageGuide"
        },
        {
            type: "input",
            message: "Who would you like to credit for their efforts on this project?(this can include third party assets as well)",
            name: "credits"
        },
        {
            type: "input",
            message: "If you have performed any tests please list them here",
            name: "testResults",
        },
        {
            type: "input",
            message: "What is your Github username",
            name: "licenses",
        },
        {
            type: "input",
            message: "Are there any links you would like to provide? If so list them below",
            name: "links",
        },
    ])
    .then(function (response) {
        let projectName = ` ${response.projectName} `;
       
    });
    