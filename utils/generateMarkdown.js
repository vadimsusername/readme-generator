
var api = require("./api");

function generateMarkdown(data) {
  //console.log("In generateMarkdown");
  return api.getUser(data.username).then(function(response){


        return `
        # Table of contents
    1. [Description](#description)
    2. [Usage](#usage)
    3. [Collaborators](#collaborators)
    4. [Assets](#assets)
    5. [Tutorials](#tutorials)
    6. [Licenses](#licenses)

    #README 
    ![GitHub Profile Image](${response.avatar_url})
    ##email 
    ${response.email}
    ![GitHub Profile Image](https://img.shields.io/badge/Node.js-README.MD-blue)
    ##Title - ${data.title}
    ##Description <a name="description"></a>
    ${data.description}
    ##Usage <a name="usage"></a>
    ${data.usage}
    ##Collaborators <a name="collaborators"></a>
    ${data.collaborators}
    ##Assets <a name="assets"></a>
    ${data.assets}
    ##Tutorials <a name="assets"></a>
    ${data.tutorials}
    ##License <a name="license"></a>
    ${data.license}
    `;
 

  });
  
  //console.log(`in generateMarkdown github email is ${githubData.email} , githubdata = ${githubData.avatar}  `);
  
}


module.exports = generateMarkdown;

