// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Table of Contents
  
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [License](#license)
  6. [Contributing](#contributing)
  7. [Test](#test)
  8. [Questions](#questions)

  ## Title <a name="title"></a>

  ${data.title}

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Test
  
  ${data.test}

  ## Questions

  For additinal questions:
  email: ${data.email}
  gitHub: www.github/${data.github}
`
}

module.exports = generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection;
