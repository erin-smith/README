function generateREADME(answers) {
  return `

# ${answers.repository}
[![Awesome Project](https://img.shields.io/badge/%F0%9F%A4%A9-Awesome%20project-blueviolet.svg)](https://shields.io/)
[![Github Status](https://img.shields.io/badge/build-passing-green.svg)](https://shields.io/)
[![npm](https://img.shields.io/npm/v/npm)
[![${answers.license}license](https://img.shields.io/badge/license-${answers.license}-blue.svg)](https://shields.io/)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

## Description
${answers.description}
[Link to project](https://${answers.username}.github.io/${answers.repository}/)


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
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/0)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/0)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/1)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/1)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/2)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/2)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/3)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/3)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/4)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/4)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/5)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/5)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/6)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/6)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/7)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/7) 
Contributors:
${answers.contributing}

## Tests 
To run tests, run the following command:
​
\`npm test\`

Also, ${answers.tests}

## Questions:
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama)
If you have any questions about the repo, open an issue or contact me:
* [GitHub Profile](http://github.com/${answers.username})
* [GitHub Email](http://github.com/${answers.email})
* ![Profile Picture](https://avatars.githubusercontent.com/${answers.username}?size=300}`;
}


module.exports = generateREADME;
