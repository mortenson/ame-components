const ghpages = require('gh-pages');
const rebase = require('rebase');
const fs = require('fs-extra');

fs.removeSync('ame-components');
fs.copySync('www', 'ame-components');

let files = ['index.html', 'handlers.html'];
files.forEach((filename) => {
  let path = 'ame-components/' + filename;
  let file = fs.readFileSync(path, 'utf8');
  let rebased = rebase(file, {
    url: {
      '^(?=[^/])': '/ame-components/',
      '^\/$': '/ame-components/',
    },
    a: {
      '^(?=[^/])': '/ame-components/',
      '^\/$': '/ame-components/',
    },
    img: {
      '^(?=[^/])': '/ame-components/',
      '^\/$': '/ame-components/',
    },
    link: {
      '^(?=[^/])': '/ame-components/',
      '^\/$': '/ame-components/',
    },
    script: {
      '^(?=[^/])': '/ame-components/',
      '^\/$': '/ame-components/',
    }
  });
  fs.writeFileSync(path, rebased);
});

ghpages.publish('ame-components', function (err) {
  if (err) {
    console.log(err);
  }
});
