const fs = require("fs");
const inquirer = require("inquirer");
const dotenv = require("dotenv");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);


const result = dotenv.config()

if (result.error) {
  throw result.error
}

console.log(result.parsed)

function promptUser() {
    return inquirer.prompt([
{
    message: "Enter your GitHub username:",
    name: "username"
},
{
    message: "Enter the Title of your Repository:",
    name: "repository"
},
{
  message: "BADGES",
  name: "badges"
},
{
  message: "Please type a description of your project and how it works:",
  name: "description"
},
{
  message: "Please type the link to a screenshot of your project:",
  name: "screenshot"
},
{
  message: "Describe any details on how and where to install your project:",
  name: "installation"
},
{
  message: "What command should be run to install your project",
  name: "code"
},
{
  message: "What command should be run to install any dependencies",
  name: "codeA"
},
{
  message: "Describe how your project can and should be used.  Give examples.",
  name: "usage"
},
{
  message: "Choose the type of license that your project uses:",
  name: "license", 
  choices: ["ISC", "MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
},
{
  message: "Name contributors (with Github username if possible), then an @symbol then comma (ex. @Johnny Li, @erin-smith,):",
  name: "contributing"
},
{
  message: "Describe any tests and issues resolved or otherwise with your project:",
  name: "tests"
},
{
  message: "Enter a link to your Github profile picture:",
  name: "picture"
},
{
  message: "What is your contact email, listed on your Github profile?:",
  name: "email"
},
    ]);
}
      
function generateREADME(answers) {
     return `

  # ${answers.repository}
  [![GitHub license](https://img.shields.io/badge/license-${answers.license}-blue.svg)](https://shields.io/)
  [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

  ## Description
   ${answers.description}
   [Link to project](https://${answers.username}.github.io/${answers.repository}/)

  ![Image](screenshot.png)

  ## Table of Contents
   * [Installation](#Installation)
   * [Usage](#Usage)
   * [License](#license)
   * [Contributing](#Contributing)
   * [Tests](#tests)
   * [Questions](#Questions)
    
    
  ## Installation 
  To install necessary dependencies, run the following command:
  ${answers.installation}
  Installation code:
  \`${answers.code}\`
  \`${answers.codeA}\`

  ## Usage 
  ${answers.usage}

  ## License 
  This project is licensed under the ${answers.license} license. 

  ## Contributing 
    If you would like to contribute to this project or have feedback, please contact me below.
  ${answers.contributing} [![](https://sourcerer.io/fame/erin-smith/erin-smith/README/images/0)](https://sourcerer.io/fame/erin-smith/erin-smith/README/links/0)[![](https://sourcerer.io/fame/erin-smith/erin-smith/README/images/1)](https://sourcerer.io/fame/erin-smith/erin-smith/README/links/1)[![](https://sourcerer.io/fame/erin-smith/erin-smith/README/images/2)](https://sourcerer.io/fame/erin-smith/erin-smith/README/links/2)[![](https://sourcerer.io/fame/erin-smith/erin-smith/README/images/3)](https://sourcerer.io/fame/erin-smith/erin-smith/README/links/3)[![](https://sourcerer.io/fame/erin-smith/erin-smith/README/images/4)](https://sourcerer.io/fame/erin-smith/erin-smith/README/links/4)[![](https://sourcerer.io/fame/erin-smith/erin-smith/README/images/5)](https://sourcerer.io/fame/erin-smith/erin-smith/README/links/5)[![](https://sourcerer.io/fame/erin-smith/erin-smith/README/images/6)](https://sourcerer.io/fame/erin-smith/erin-smith/README/links/6)[![](https://sourcerer.io/fame/erin-smith/erin-smith/README/images/7)](https://sourcerer.io/fame/erin-smith/erin-smith/README/links/7) 

  ## Tests 
  To run tests, run the following command:
​
\```
npm test
``\`

  Also, ${answers.tests}

  ## Questions:
  If you have any questions about the repo, open an issue or contact me:
  * [GitHub Profile](http://github.com/${answers.username})
  * [GitHub Email](http://github.com/${answers.username})
  * {GitHubProfilePicture: ""}`;
  }

  async function init() {
    console.log("honza")
    try {
      const answers = await promptUser();
      const README = await generateREADME(answers);
      await writeFileAsync("README.md", README);

    console.log("Successfully wrote to README.md");
    }
    catch (err) {
        console.log(err);
      throw err;
    }
  }
 init();

//* If `fs.readFile` reads a file and `fs.writeFile` writes, but _overwrites_, a file, what method do you think will allow you to _append_ text to a file?

// module.exports is an object we use to store variables or methods

