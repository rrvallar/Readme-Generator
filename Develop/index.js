// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
  },
  {
    type: "input",
    name: "installation",
    message: "What is the Installation?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the Usage?",
  },
  {
    type: "list",
    name: "license",
    message: "What is the License?",
    choices: ["MIT", "ISC", "IBM"],
  },
  {
    type: "input",
    name: "contribution",
    message: "What is the contribution?",
  },
  {
    type: "input",
    name: "test",
    message: "What is the test?",
  },
  {
    type: "input",
    name: "username",
    message: "What is the Username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the Email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file read");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answer) => {
    console.log(answer.license);
    writeToFile("readme.md", generateMarkdown(answer));
  });
}

// Function call to initialize app
init();
