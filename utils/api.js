var axios = require("axios");

const api = {
  getUser(username) {
    //console.log("in api.getUser()")
    //userName = username;
    var queryUrl = `https://api.github.com/users/${username}`;
    var  githubData = axios.get(queryUrl).then(function(response){
    
        return response.data;
        
    });
    return githubData;

  }
};

module.exports = api;
