# NPM
NPM is a tool that manages the dependencies of our Javascript project, both in client and in backend (NodeJs). Thanks to this tool, we can work with the installation of those modules that our project needs in a comfortable way, avoiding all the problems involved in installing the dependencies manually and without any control or supervision.  The dependencies are installed in a directory (default called / node_modules). What happens if my bookstores depend on others? It is also able to solve that and download everything necessary for it to work and thus, avoid doing it manually.

#CONFIG PACKAGE
npm init or npm init -y

#INSTALL WEBPACK PACKAGES
npm i -D webpack webpack-cli
code .

#INSTALL PLUGIN WEBPACK
npm i -D html-webpack-plugin html-loader

#INSTALL PLUGIN WEBPACK-DEV-SERVER
npm i -D webpack-dev-server

#BUILD
npm run build

#COMPILE ONLIVE SERVER
npm run start:dev

#OPEN SERVER
http-server -o

#INSTALL MOMENT LIBRARY
npm install moment --save

#INSTALL MOMENT PLUGIN
npm i -D moment-locales-webpack-plugin

#INSTALL BABEL
npm i -D @babel/core babel-loader @babel/preset-env webpack
