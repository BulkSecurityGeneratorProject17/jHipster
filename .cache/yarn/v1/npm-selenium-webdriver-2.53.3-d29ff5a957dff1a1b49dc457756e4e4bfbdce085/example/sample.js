// Load the http module to create an http server.
var http = require('http');

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(`<!DOCTYPE html><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"><meta http-equiv="Content-Language" content="en"><meta http-equiv="X-UA-Compatible" content="IE=edge"><title>Index</title><link href="dossier.css" rel="stylesheet" type="text/css"><header><div><form><div><input type="search" placeholder="Search"></div></form></div></header><main><article class="indexfile"><h1>Closure Generated API Docs</h1><p>This is the generated documentation for the Closure Library repository at <a href="http://github.com/google/closure-library">github.com/google/closure-library</a>.</p><p>The documentation was produced using <a href="http://github.com/jleyba/js-dossier">github.com/jleyba/js-dossier</a></p></article><nav><h3><a href="index.html">Overview</a></h3><div><input type="checkbox" id="nav-types" checked/><label for="nav-types"><h3><span class="selectable">Types</span></h3></label><div id="nav-types-view"></div></div></nav></main><div class="pre-footer"><div></div></div><footer><div><a href="https://github.com/jleyba/js-dossier">Generated by dossier</a></div></footer><script src="types.js"></script><script src="dossier.js"></script>`);
}).listen(8000);

http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.end(`<!DOCTYPE html><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"><meta http-equiv="Content-Language" content="en"><meta http-equiv="X-UA-Compatible" content="IE=edge"><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><title>Index</title><link href="dossier.css" rel="stylesheet" type="text/css"><header><button class="dossier-menu"><i class="material-icons">menu</i></button><form><input type="search" placeholder="Search" tabindex="1"><i class="material-icons">search</i></form></header><div class="content"><main><article class="page"><h1>Closure Generated API Docs</h1>
<p>This is the generated documentation for the Closure Library
repository at
<a href="http://github.com/google/closure-library">github.com/google/closure-library</a>.</p>
<p>The documentation was produced using
<a href="http://github.com/jleyba/js-dossier">github.com/jleyba/js-dossier</a></p>
</article></main><footer><div><a href="https://github.com/jleyba/js-dossier">Generated by dossier</a></div></footer></div><nav class="dossier-nav"><section><a class="title" href="index.html" tabindex="2">Overview</a></section><section class="types"><div class="toggle"><div class="title"><span class="item" tabindex="2">Types</span><i class="material-icons">expand_more</i></div></div></section></nav><script src="types.js"></script><script src="dossier.js"></script>`);
}).listen(9000);

console.log("Hello server running at http://127.0.0.1:8000/");
console.log("Goodbye server running at http://127.0.0.1:9000/");