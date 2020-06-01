const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateREADME = require("./utils/generateMarkdown.js");

const questions = [
  {
    message: "Enter your GitHub username:",
    name: "username"
  },
  {
    message: "Enter the Title of your Repository:",
    name: "repository"
  },
  {
    message: "Briefly decribe your project: what it does, how it works, why this is useful or noteworthy:",
    name: "description"
  },
  {
    message: "Please type the link to a screenshot of your project:",
    name: "screenshot"
  },
  {
    message: "Describe how and where to get and install your project.  We'll discuss command line later.",
    name: "installation"
  },
  {
    message: "What command(s) should be run to install your project",
    name: "code"
  },
  {
    message: "What command(s) should be run to install any dependencies",
    name: "codeA"
  },
  {
    message: "Describe how your project can and should be used.  Give examples.",
    name: "usage"
  },
  {
    type: "list",
    message: "Choose the type of license that your project uses:",
    name: "license",
    choices: ["ISC", "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
  },
  {
    message: "Name the contributors to your project:",
    name: "contributing"
  },
  {
    message: "Describe any tests and issues resolved or otherwise with your project:",
    name: "tests"
  },
  {
    message: "What is your contact email, listed on your Github profile?:",
    name: "email"
  }
];

const writeFileAsync = util.promisify(fs.writeFile);

function createMD (file, answers)
{
  const data = generateREADME(answers);
  writeFileAsync(file, data);
}


async function init ()
{
    let answers = await inquirer.prompt(questions);
    let README = generateREADME(answers);
    await createMD("README.md", README);
    console.log("Successfully wrote to README.md");
  }
init();

//* If `fs.readFile` reads a file and `fs.writeFile` writes, but _overwrites_, a file, what method do you think will allow you to _append_ text to a file?

// module.exports is an object we use to store variables or methods


