# Learn npm

Node Package Manager is a software package registry. A package is a JS module that must contain a package.json. It can be private or public.


[npm devhint cheat sheet](https://devhints.io/npm)
[npm apeli cheat sheet](https://kapeli.com/cheat_sheets/npm.docset/Contents/Resources/Documents/index)

## npm cli

```bash
npm help install // to open the web page
npm help-search install // to search all the reference about install

npm install, npm i
npm install -h
npm i karma // will install to dependencies
npm i https://github.com/expressjs/express // to install package from git repo
npm i karma, --save-dev, npm i karma -D // to save to the dev depedencies
npm i package -D --save-exact // to set the exact version of the package

npm i express@1.0.0 // installing specific version
npm i express@1.x // latest version under 1.
npm i underscore@">=1.1.0 <1.4.0"

npm view express versions  --json

npm uninstall karma --save, npm rm karma -D
npm r underscore -g // to remove global package

npm update --dev
npm update --prod
npm update express
npm update -g gulp // to update global package

npm list, npm ll, npm ls
npm ll --depth 0
npm ll --g true, npm ll --global true 
npm ll --g true --depth 0
npm ll --g true --long true
npm ll --g true --json true

npm start
npm run test, npm tst, npm t
npm stop
npm restart // if restart do not exsit will run start then stop script
 
npm prune // to remove package from node_modules that are not in the package.json
pnm prune --production 

npm repo express // will set you to the repo page

npm i npm@latest -g // run this as admin to upgrade npm 

```

### npm CLI Niceties
```bash
-h, --help // for help

```
[NPM shorthands and Other CLI](https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties)

### npm init

```bash
npm init
npm init --yes, npm init -y // default values
npm init -author-name 'Seb1080' // to set the author name default as "Seb1080"
```

[NPM shorthands and Other CLI](https://docs.npmjs.com/misc/config#shorthands-and-other-cli-niceties)

### npm package.json

```bash
{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}

```

### npm Scripts

Scripts can serve as single source of throught for all tasks in a project.
```bash


```

### Publishing on npm

Create a account on npm.

[npm create a account](https://www.npmjs.com/signup)

```bash
npm adduser 
Username:
Password: 
Email:

// set git repo

npm init // name, version, entry-point matter

npm publish
npm info custom-package
```

## Npm Security