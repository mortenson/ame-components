// Put this file in a directory where @stencil/core exists in node_modules, then run:		+var stencil = require('@stencil/core/server');
// $ echo $HTML | node ssr.js [root] [build-dir] [namespace]		
// Full example from my use case:		
// $ echo '<sam-text text="Hello, world"></sam-text>' | node ssr.js /var/www/stencil/sams-components/ ../dist sam		
// Pipes are used because HTML strings can be really long, and bash has limits on how large argument lists can get (~256k usually).		
//var stencil = require('@stencil/core/server');
var stencil = require('@stencil/core');
var args = process.argv.slice(2);
if (args.length < 3) {
  console.error('Not enough args');
}

var data = '';

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk) {
  data += chunk;
});

process.stdin.on('end', function() {
  /*var config = stencil.loadConfig({
    rootDir: args[0],
    buildDir: args[1],
    namespace: args[2]
  });
  var renderer = stencil.createRenderer(config);*/
  var renderer = stencil.createRenderer({
    rootDir: args[0],
    buildDir: args[1],
    namespace: args[2]
  });

  renderer.hydrateToString({
    html: data
  }, function(results) {
    if (results.diagnostics.length) {
      console.error(results.diagnostics);
    }
    console.log(results.html);
  });
});
