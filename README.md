# URL Shortener
Enter an https:// url, the website would create a shorten url for you.

## Features
*  Create a shorten url with 5 random digit number or letters, be concise and neat!
*  "COPY URL" button to copy the shorten url to your clipboard and share to others.

## Installation and Execution
1.  Clone the files to your computer
```
git clone https://github.com/wentingliuu/url-shortener.git
```
2. Init: install the npm packages
```
cd url-shortener
```
```
npm install
```
3. Run MongoDB Server
```
cd ~/mongodb/bin/
```
```
./mongod --dbpath <path to mongodb-data directory>
```
- While the terminal shows `waiting for connections on port 27017`, MongoDB has started successfully.
4. Run the project
```
npm run dev
```
- While the terminal returns `Express is listening on localhost:3000`, please go to http://localhost:3000 on your browser.

## Screenshots
*  HOME PAGE
![HOME PAGE](https://github.com/wentingliuu/url-shortener/blob/main/public/img/home.png)
*  SHORTEN PAGE (When the shorten url is created)
![SHORTEN PAGE](https://github.com/wentingliuu/url-shortener/blob/main/public/img/shorten.png)
*  NOT FOUND PAGE (When the shorten url you entered could not found in database)
![NOT FOUND PAGE](https://github.com/wentingliuu/url-shortener/blob/main/public/img/shorten.png)

## Prerequisites
*  [Visual Studio Code](https://code.visualstudio.com/) - development environment
*  [Node.js](https://nodejs.org/en/) & [npm](https://www.npmjs.com/) - JavaScript runtime environment
*  [Express.js](https://expressjs.com/) - web application framework
*  [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - template engine
*  [MongoDB](https://www.mongodb.com/) - document-oriented database
*  [Mongoose](https://mongoosejs.com/) - MongoDB object modeling tool(OBM)
*  [body-parser](https://www.npmjs.com/package/body-parser) - middleware
