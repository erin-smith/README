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
  message: "Describe any details on how to install your project:",
  name: "installation"
},
{
  message: "Enter the commands to install your project",
  name: "code"
},
{
  message: "Describe how your project can and should be used.  Give examples.",
  name: "usage"
},
{
  message: "Enter the type of license that your project uses:",
  name: "license", 
  default: "ISC"
},
{
  message: "The contributors to this project include:",
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
  
  * Badges https://shields.io/

  Description: ${answers.description}
   [Link](https://${answers.username}.github.io/${answers.repository}/)

  ![Image](${answers.installation})

  ## Table of Contents
   * [Installation](#Installation)
   * [Usage](#Usage)
   * [License](#license)
   * [Contributing](#Contributing)
   * [Tests](#tests)
   * [Questions](#Questions)
    
    
  ## Installation 
  ${answers.installation}
  \`${answers.code}\`

  ## Usage 
  ${answers.usage}

  ## License 
  ${answers.license}

  ## Contributing 
  ${answers.contributing}  @ symbols

  ## Tests 
  ${answers.tests}

  ## Questions:

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

