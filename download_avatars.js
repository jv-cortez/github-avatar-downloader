var request = require('request');

console.log('Welcome to the Github Avatar Downloader!');

var GITHUB_USER = "jv-cortez";
var GITHUB_TOKEN = "dad600fe97dfc40673e2a7ed103b3ae02fe7f1d6";
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
    console.log(contributor.avatar_url);
      })
      console.log(newData);    
    } catch (err) {
      console.log('Failed to parse content body');
    }
  });
}


// function downloadImageByUrl(url, filePath){
//     request.get('url')

//       .on('error', function (err) {
//          throw err;
//        })

//       .on('response', function (response) {
//          console.log('Response Status Code:\n',response.statusCode, response.headers['content-type']);
//        })

//       .pipe(fs.createWriteStream(filePath));
//       console.log("Download complete...")
// }
// function getRepoContributors(repoOwner, repoName, callback){

    
//     var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
//     // console.log(requestURL)

//         request.get(requestURL) 
//             .on('error', function (err) {
//                 throw err;
//             })

//             .on('reponse', function (response) {
//                 console.log('Response Status Code:\n',response.statusCode, response.headers['content-type']);
//             })

//             .pipe(fs.createWriteStream('./body'));
//             console.log("Download complete...")
    
//     try {
//         const data = JSON.parse(body);
//         callback(data);
//     } catch (err) {
//     console.log('Failed to parse content body', err);
//     }
//     return { 
//         headers : {
//             'User-Agent': "LHL student project"
//         }
//     };
// }


getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
});



