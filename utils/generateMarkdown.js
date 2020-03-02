
var api = require("./api");

function generateMarkdown(data) {
  console.log("In generateMarkdown");
  api.getUser("vadim");

  return `
# ${data.title}

`;
}

module.exports = generateMarkdown;
