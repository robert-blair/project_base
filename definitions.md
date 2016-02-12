#Definitions    

Just some important definitions (context will be stated)  that I've encountered to date..

A package (context: npm)
: a) a folder containing a program described by a package.json file
: b) a gzipped tarball containing (a)
: c) a url that resolves to (b)
: d) a <name>@<version> that is published on the registry with (c)
: e) a <name>@<tag> that points to (d)
: f) a <name> that has a "latest" tag satisfying (e)
: g) a git url that, when cloned, results in (a).

A "dependencies" package (npm)
: These packages are required by your application in **production**

A "devDependencies" package (npm)
: These packages are only needed for development and testing

####Note: in the npm CLI use... 

```JavaScript
npm install  package --save
```
...to add `package` to the package.json file as a "dependencies" package.

```JavaScript
npm install package --save-dev
```
...to add `package` to the package.json file as a "devDependencies" package.