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

  ## Description <a name="description"></a>

  ${data.description}

  ## Installation <a name="installation"></a>

  ${data.installation}

  ## Usage <a name="usage"></a>

  ${data.usage}

  ## License <a name="license"></a>

  ${data.license}

  ## Contributing <a name="contributing"></a>

  ${data.contributing}

  ## Test <a name="test"></a>
  
  ${data.test}

  ## Questions <a name="questions"></a>

  For additinal questions:
  email: ${data.email}
  gitHub: www.github/${data.github}
`
}

module.exports = generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection;
