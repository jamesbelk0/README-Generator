// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(answer) {

}
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let chosenLicense = '';
  'Mozilla Public License 2.0', 'ISC'
  if (license === 'MIT') {
    chosenLicense = `![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (license === 'Apache 2.0') {
    chosenLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  } else if (license === 'GNU LGP') {
    chosenLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
  } else if (license === 'Mozzilla Public License 2.0') {
    chosenLicense = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
  } else if (license === 'ISC') {
    chosenLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`
  } else if (license === '') {
    chosenLicense = `['']`;
  }
  return chosenLicense;
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  ## Description
  ![badge](https://img.shields.io/badge/license-${data.license}-blue.svg)<br />
  <br />
  <video src='./utils/assets/media/coderunning' width=180/>
  The code for this project can be found here: [README Generator](https://github.com/${data.username}/${data.repo})
  ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}<br />
  ![]
  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-blue.svg)
  <br />
  This project is covered under the ${data.license} license.
  ## Contributing
  ${data.contributor}<br/><br />
  If you would like to contribute, please follow the [Contributor Covenant](https://www.contributor-covenant.org/).${data.contribute}
  ## Tests
  ${data.test}
  ## Questions
  ${data.questions}<br />
  My GitHub Username is: [${data.username}](https://github.com/${data.username})<br />
  My Email is: ${data.email}

`;
}

module.exports = generateMarkdown;
