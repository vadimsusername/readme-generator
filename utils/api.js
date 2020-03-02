var axios = require("axios");
var userName = "vadimsusername";




const api = {
  getUser(username) {
    console.log("in api.getUser()")
    //userName = username;
    var queryUrl = `https://api.github.com/users/${userName}`;
    axios.get(queryUrl).then(function(response){
        console.log(response);
        
    });

  }
};

module.exports = api;
