// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === "MIT") {
    return '[![License: "MIT"](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === "ISC") {
    return '[![License: "ISC"](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else if (license === 'Mozilla') {
    return '[![License MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
  } else {
    return (license === 'None');
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Apache") {
    license = '![Apache License Link](https://opensource.org/licenses/Apache-2.0)'
    return license
  } else if (license === 'MIT') {
    license = '![MIT License Link](https://opensource.org/licenses/MIT;)';
    return license
  } else if (license === "ISC") {
    license = '![ISC License Link](https://opensource.org/licenses/ISC)';
    return license
  } else if (license === "Mozilla") {
    license = '![Mozilla License Link](https://opensource.org/licenses/MPL-2.0")';
    return license
  } else {
    return ('');
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicense(license) {
  if (license === "MIT") {
    license = '![MIT License Section](license/MITLICENSE.txt)'  
  } else if (license === "Apache License 2.0") {
    license = '![Apache License 2.0 Link](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === "ISC") {
    license = '![ISC License Link](https://opensource.org/licenses/ISC)'
  } else if (license === "Mozilla") {
    license = '![Mozilla License Link](https://opensource.org/licenses/MPL-2.0)'
  } else {
    return ('');
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Description](#license)
  - [Contact](#contact)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Credits
  ${data.credit}
  
  ## License
  ${data.license}
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contact
  * GitHub profile name [${data.github}](https://github.com/${data.github})
`; 
}

module.exports = generateMarkdown;
