var request = require('request');

console.log('Welcome to the Github Avatar Downloader!');

var GITHUB_USER = "jv-cortez";
var GITHUB_TOKEN = "dad600fe97dfc40673e2a7ed103b3ae02fe7f1d6";

function getRepoContributors(repoOwner, repoName, callback){
            
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
    console.log(requestURL)
}

getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
});



