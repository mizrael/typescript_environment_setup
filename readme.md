# Introduction
This repo will serve as a template for a basic project structure for Typescript apps.
It will use Gulp to watch the /src/ folder, transpile the .ts files into .js and run a lite web server.

# Prerequisites
* execute the following commands:
```
sudo npm install -g typescript
sudo npm install -g typings
sudo npm install -g gulp
```

# Initialization
* create project folder and enter it
* create the following folders:
    * /src
    * /www
    * /www/app
* execute the following command:

```
tsc --init --target es5 --sourceMap --experimentalDecorators --emitDecoratorMetadata
```

* execute the following commands:

```
npm init
npm install typings --save-dev
npm install gulp --save --save-dev
npm install del --save-dev
npm install gulp-typescript --save-dev
npm install gulp-concat --save-dev
npm install gulp-webserver --save-dev
npm install gulp-sourcemaps --save-dev
```

* edit the package.json file and set gulpfile.js as "main" (if you didn't it during npm init)

```
"main": "gulpfile.js"
```

# Run the build task
in Visual Studio Code (on Mac): cmd + shift + b