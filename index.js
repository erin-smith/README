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
    message: "Describe your project: What does it do?  How does it work? Pitch your project. Why is it useful/noteworthy? Any Challenges that you faced or future developments to come? ",
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
    message: "Describe how your project can/should be used.  Give examples.",
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
    message: "What command(s) do you use to run tests?:",
    name: "testcode"
  },
  {
    message: "What is your contact email, listed on your Github profile?:",
    name: "email"
  }
];

const writeFileAsync = util.promisify(fs.writeFile);

function writeToFile (file, answers)
{
  writeFileAsync(file, answers, (err) =>
  {
    if (err) {
      console.log(err);
    }
  })
}

function init ()
{
  inquirer.prompt(questions).then((answers) =>
  {
    let README = generateREADME(answers);
    writeToFile("README.md", README);
    console.log("Successfully wrote to README.md");
  })
}
init();



