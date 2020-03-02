const questions = [
    {
        type : "input",
        message: "Enter your GitHub username: ",
        name : "username"
    },
    {
        type: "input",
        message: "What is the title of your project: ",
        name: "title"
    },
    {
        type: "input",
        message: "Describe what your application does: ",
        name: "description"
    },
    {
        type: "input",
        message: "Enter instructions for how to use the application",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter your collaborators with links to their GitHub profiles",
        name: "collaborators"
    },
    {
        type: "input",
        message: "Enter any third-party assets you used and their creators and links: ",
        name: "assets"
    },
    {
        type:"input",
        message: "Enter any links to tutorials that you used: ",
        name: "tutorials"
    },
    {
        type: "list",
        message: "Which license do you want to use: ",
        choices: ['GNU AGPLv3','GNU GPLv3','GNU LGPLv3','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense','Other'],
        name: "license"
    }

];
/*
var inquirer = require("inquirer");
inquirer.prompt(questions).then(function(answers){
    
    console.log(answers.username);
    console.log(answers.title);
    console.log(answers.description);
    console.log(answers.usage);
    console.log(answers.collaborators);
    console.log(answers.assets);
    console.log(answers.tutorials);
    console.log(answers.license);
    //generaterMarkDown(answers);
});
*/
var answers = {
    username: "vadimsusername",
    title: "readme-generator",
    description: "takes user input, then generates a readme.md",
    usage: "answer questions when prompted",
    collaborators: "none",
    assets: "inquirer.js,axios.js",
    tutorials: "https://guides.github.com/features/mastering-markdown/",
    license: "MIT License"
}

var generateMarkdown = require("./utils/generateMarkdown.js");

var readme = generateMarkdown(answers);
//console.log(readme);

function writeToFile(fileName, data) {
}

function init() {

}

init();
