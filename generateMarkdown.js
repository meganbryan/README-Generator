// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ###   ${data.description}
  
  ## Table of Contents
    1. [Installation] (#installation)
    2. [Usage] (#usage)
    3. [License] (#license)
    4. [Contributing] (#contributing)
    5. [Tests] (#tests)
    6. [Questions] (#questions)
    7. [Link to Application] (#link)
    8. [Screenshot of Application] (#screenshot)

  ## Installation <a name="installation"></a>
  ### ${data.installation}

  ## Usage <a name="usage"></a>
  ### ${data.usage}

  ## License <a name="license"></a>
  ### ${data.License}

  ## Contributing <a name="contributing"></a>
  ### ${data.contributing}

  ## Tests <a name="tests"></a>
  ### ${data.tests}

  ## Questions <a name="questions"></a>
  ### ${data.questions}

  ## Link to Deployed Application: 
  ### [${data.URLName}](${data.URL}) <a name="link"></a>
  ## ![${data.altText}](${data.photoFile}) <a name="screenshot"></a>
`;
}

module.exports = generateMarkdown;