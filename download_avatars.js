var request = require('request');
var fs = require('fs');

console.log('Welcome to the Github Avatar Downloader!');

function getRequestOptions(repoOwner, repoName) {
  return {
    url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'kittenfingers'
    },
    qs: {
      accessToken: process.env.GITHUB_ACCESS
    }
  };
}

function getRepoContributors(repoOwner, repoName, callback) {
  console.log(`Requesting github users for ${repoOwner}/${repoName}`);
  request(getRequestOptions(repoOwner, repoName), function (error, response, body) {
    try {
      const data = JSON.parse(body);
      callback(data);
    } catch (err) {
      console.log(err, 'Failed to parse content body');
    }
  });
}

function downloadImageByUrl(url, filePath) {
  request.head(url, function(err, res, body) {
    let extension = '';
    let contentType = res.headers['content-type'];

    if (contentType === 'image/jpeg') {
      extension = '.jpg';
    } else if (contentType === 'image/png') {
      extension = '.png';
    } else {
      console.log('Unknown content type', url, contentType);
    }
    
    request.get(url).pipe(fs.createWriteStream(filePath + extension));{
      console.log("Download complete");
    }
  });
}

if (process.argv.length < 4) {
  console.log('Proper usage:');
  console.log("Error, please input correct information!", `${process.argv[1]} repoOwner repoName`);
} else {
  getRepoContributors(process.argv[2], process.argv[3], (data) => {
    data.forEach((contributor) => {
      downloadImageByUrl(contributor.avatar_url, 'avatars/' + contributor.login);
    });
  });
}
