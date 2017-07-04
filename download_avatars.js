var request = require('request');

console.log('Welcome to the Github Avatar Downloader!');

var GITHUB_USER = process.env.GITHUB_USER;
var GITHUB_TOKEN = process.env.GITHUB_TOKEN;
var request = require('request');
var fs = require('fs');

function getRequestOptions(repoOwner, repoName) {
  return {
    url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'kittenfingers'
    },
  };
}

function getRepoContributors(repoOwner, repoName, callback) {
    request(getRequestOptions(repoOwner, repoName), function (error, response, body) {
    try {
      const data = JSON.parse(body);
      data.forEach((contributor) => {
      console.log(contributor.avatar_url) ;
        })  
        } catch (err) {
        console.log('Failed to parse content body');
        }
    });
}

// function downloadImageByUrl(url, filePath) {
    
// request.get(url)

//         .on('error', function (err) {
//             throw err;
//         })

//         .on('response', function (response) {
//             console.log('Response Status Code:\n',response.statusCode,response.statusMessage, response.headers['content-type']);
//         })

//         .pipe(fs.createWriteStream(filePath));
//         console.log("Download complete...")
//     }

// downloadImageByUrl("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "./kvirani.jpg")

getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
});



