function generateREADME(answers) {
  return `

# ${answers.repository}
[![Github Status](https://img.shields.io/badge/build-passing-green.svg)](https://shields.io/)
![npm](https://img.shields.io/npm/v/npm)
[![Awesome Project](https://img.shields.io/badge/%F0%9F%A4%A9-Awesome%20project-blueviolet.svg)](https://shields.io/)
[![${answers.license}license](https://img.shields.io/badge/license-${answers.license}-blue.svg)](https://shields.io/)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

## Description
  ${answers.description}\

[Link to project](https://${answers.username}.github.io/${answers.repository}/)\

![Screenshot](${answers.screenshot})\  


## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#license)
* [Contributing](#Contributing)
* [Tests](#tests)
* [Questions](#Questions)
 
 
## Installation 
  ${answers.installation} \

Installation code:\  

To install necessary dependencies, run the following command:\
\`${answers.code}\`\  

To install necessary dependencies, run the following command(s):\  
\`${answers.codeA}\`\


## Usage 
  ${answers.usage}

## License 
[![${answers.license}license](https://img.shields.io/badge/license-${answers.license}-blue.svg)](https://shields.io/)\
  This project is licensed under the ${answers.license} license. 

## Contributing   
 If you would like to contribute to this project or have feedback, please contact me below in the Questions Section.
***
 **Contributors:** ${answers.contributing} \  
***
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/0)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/0)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/1)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/1)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/2)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/2)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/3)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/3)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/4)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/4)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/5)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/5)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/6)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/6)
[![](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/images/7)](https://sourcerer.io/fame/${answers.username}/${answers.username}/${answers.repository}/links/7) 


## Tests 
  To run tests, run the following command:\
\`$ npm test\`\  

  Also, ${answers.tests}

## Questions:  
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/${answers.username})\  

  If you have any questions about the repo, [open an issue](https://github.com/${answers.username}/${answers.repository}/issues/new) or contact me:\  

* [My GitHub Profile](http://github.com/${answers.username})
* [![Email Me!](https://img.shields.io/badge/email:-${answers.email}-9cf.svg)]("mailto:${answers.email}")
***
![My Profile Picture](https://avatars.githubusercontent.com/${answers.username}?size=300)`;
}


module.exports = generateREADME;
