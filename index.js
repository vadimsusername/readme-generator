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

var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown.js");
fs = require("fs");

inquirer.prompt(questions).then(function(answers){
    generateMarkdown(answers).then(function(response){


        console.log(response);
    
        fs.writeFile(`${answers.title}README.md`, response, function(err) {
    
            if (err) {
              return console.log(err);
            }
          
            console.log("Success!");
          
          });
          
    
    
    });
    
  
});


function init() {

}

init();
