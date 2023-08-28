# Quick start 
npm cache clean --force

rm -rf node_modules package-lock.json

npm install bcrypt@latest

npm install

npm run start 


# Creating a RESTful API with Node.js
This repository accompanies my YouTube video series on building a RESTful API with Node.js: [https://github.com/academind/node-restful-api-tutorial.git](https://github.com/academind/node-restful-api-tutorial.git)

## Usage
Check out the branch you're interested in (i.e. which belongs to the video in my series you just watched), ```git clone``` it and thereafter run ```npm install```.

Make sure to also add your Mongo Atlas Admin Username to a nodemon.json file (which you have to create).

```
{
    "env": {
        "MONGO_ATLAS_PW": "YOUR_MONGO_USER_PW"
    }
}
```
