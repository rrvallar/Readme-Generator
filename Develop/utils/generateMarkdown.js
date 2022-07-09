// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var actualLicense = {};
  actualLicense.name = license;
  if (license == "ISC") {
    actualLicense.BadgeLink = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]`;
  } else if (license == "MIT") {
    actualLicense.BadgeLink = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license == "IBM") {
    actualLicense.BadgeLink = `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`;
  }
  return actualLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license.name == "ISC") {
    license.BadgeLink += `(https://opensource.org/licenses/ISC)`;
  } else if (license.name == "MIT") {
    license.BadgeLink += `(https://opensource.org/licenses/MIT)`;
  } else if (license.name == "IBM") {
    license.BadgeLink += `(https://opensource.org/licenses/IPL-1.0)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license.name == "ISC") {
    license.section = "Covered by ISC";
  } else if (license.name == "MIT") {
    license.section = "Covered by MIT";
  } else if (license.name == "IBM") {
    license.section = "Covered by IBM";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var license = renderLicenseBadge(data.license);
  renderLicenseLink(license);
  renderLicenseSection(license);

  var tableOfContent = `
  [Description](#DESCRIPTION)  
  [Installation](#INSTALLATION)  
  [Contribution](#CONTRIBUTION)  
  [Usage](#USAGE)  
  [Test](#TEST)  
  [Questions](#QUESTIONS)  
  [License](#LICENSE)  
  `;
  // [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)

  return `# ${data.title}
  ## TABLE OF CONTENT
  ${tableOfContent}
  ${license.BadgeLink}
  ## DESCRIPTION
  ${data.description}
  ## INSTALLATION
  ${data.installation}
  ## USAGE
  ${data.usage}
  ## CONTRIBUTION
  ${data.contribution}
  ## TEST
  ${data.test}
  ## QUESTIONS

  This is my Github Profile : [Profile](${
    `https://github.com/` + data.username
  })  
  For any related questions, feel free to contact me at ${data.email}

  ## LICENSE
  ${license.section}
`;
}

/**
 * DESCRIPTION
 *  ....
 * INSTALLATION
 * ..
 * USAGE
 * CONTRIBUTION
 * TEST
 */

module.exports = generateMarkdown;
