// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if (license === 'None') {
    badge = `![License Badge]N/A`;
  } else if (license === "MIT License") {
    badge = `![License Badge](https://img.shields.io/badge/License-MIT-green.svg)`
  } else if (license === 'GNU AGPLv3') {
  badge = `![License Badge](https://img.shields.io/badge/License-AGPL-green.svg)`
} else if (license === 'GNU GPLv3') {
  badge = `![License Badge](https://img.shields.io/badge/License-GPL-green.svg)`
} else if (license === 'GNU LGPLv3') {
  badge = `![License Badge](https://img.shields.io/badge/License-LGPL-green.svg)`
} else if (license === 'Mozilla Public License 2.0') {
  badge = `![License Badge](https://img.shields.io/badge/License-MPL-green.svg)`
} else if (license === 'Apache License 2.0') {
  badge = `![License Badge](https://img.shields.io/badge/License-Apache-green.svg)`
} else if (license === 'Boost Software License 1.0') {
  badge = `![License Badge](https://img.shields.io/badge/License-Boost%20Software-green.svg)`
} else if (license === 'The Unlicense') {
  badge = `![License Badge](https://img.shields.io/badge/License-Unlicense-green.svg)`
}

  return badge;
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      licenseLink = "https://mit-license.org/";
      break;
    case "GNU AGPLv3":
      licenseLink = "https://www.gnu.org/licenses/agpl-3.0.en.html#license-text";
      break;
    case "GNU GPLv3":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0.en.html";
      break;
    case "Apache License 2.0":
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
      break;
    case "GNU LGPLv3":
      licenseLink = "https://www.gnu.org/licenses/lgpl-3.0.en.html#license-text";
      break;
    case "Mozilla Public License 2.0":
      licenseLink = "https://www.mozilla.org/en-US/MPL/2.0/";
      break;
    case "Boost Software License 1.0":
      licenseLink = "https://www.boost.org/users/licenses.html";
      break;
    case "The Unlicense":
      licenseLink = "https://choosealicense.com/licenses/unlicense/";
      break;
    //If no license is given, defaults empty string
    default:
      licenseLink = "";
      break;
  }
    return licenseLink;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";

  // if a license has been selected, create License section
  // with link to license information
  if (license === "None") {
    licenseSection = "N/A";
  } else {
    licenseSection = `Please see ${renderLicenseLink(license)} to get more information about this license.\n`;
  }
  return licenseSection;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description

  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contribute](#contribute)
  - [Test](#test)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## Contribute

  ${data.contributing}

  ## Test
  
  ${data.tests}
  
  ## License
  
  ${renderLicenseSection(data.license)}

  ## Questions

  You can find me [HERE](https://github.com/${data.username}) on Github. You can email me at ${data.email} if you have any additional questions.
`;
}

module.exports = generateMarkdown;
