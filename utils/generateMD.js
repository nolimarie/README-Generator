function renderLicenseBadge(license) {
    switch (license) {
        case 'None':
            return "";
            break;
        case 'MIT':
            return 'https://img.shields.io/badge/License-MIT-yellow.svg';
            break;
        case 'ISC':
            return 'https://img.shields.io/badge/License-ISC-blue.svg';
            break;
        case 'Apache 2.0':
            return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
            break;
    }
}


function renderLicenseLink(license) {
    switch (license) {
        case 'None':
            return "";
            break;
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
            break;
        case 'ISC':
            return 'https://opensource.org/licenses/ISC';
            break;
        case 'Apache 2.0':
            return 'https://opensource.org/licenses/Apache-2.0';
            break;
    }

}

function renderLicenseSection(license) {
    if (license === none) {
        return "";
    }
}

function generateMD(data) {
    var license = data.license;
    var licenseToLowercase = data.license.toLowerCase();
    return `
# ${data.projectTitle}

## Project Description
${data.projectDesc}

[![License: ${data.license}](${renderLicenseBadge(license)})](${renderLicenseLink(licenseToLowercase)})

### Table of Contents
* [Usage](#usage)
* [Technologies](#tech)
* [Installation](#installation)
* [Demonstration](#demo)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)

### Usage
${data.usage}

### Technologies
${data.tech}

### Installation
${data.installation}

### Demonstration
Please click on link for demonstration: ${data.demo}

### License
${data.license}

### Contributing
${data.contributing}

### Questions?
Github Username: ${data.githubUserName}

For additional information, please reach out to me at ${data.email}
`
}

module.exports = generateMD;