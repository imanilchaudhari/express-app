# Node API Demo

[![Build Status](https://travis-ci.org/imanilchaudhari/express-app.svg?branch=master)](https://travis-ci.org/imanilchaudhari/express-app)

Demo app built with ExpressJS.

## Tech Stack

- Node.js 10.14.x
- NPM Libraries
  - Nodemon for Debugging and keeping track of changed files
  - Express for initiating the server
  - Mongoose for interracting with MongoDB
  - BodyParser to parse request body
- MongoDB 4.0 (Docker container recommended)

## Walkthrough

### Set-up Mongo Docker (Recommended)

```
docker pull mongo

docker run -p 27017:27017 -v ~/data/db:/data/db --name mongodb -d  mongo
```

### Starting the REST API Server

```
npm start run
```

View the OpenAPI documentation @ http://localhost:3000/api-docs

### Create a sample post

```
curl -X POST \
  http://localhost:3000/posts \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: *' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:3000' \
  -d '{
	"name" : "Do something",
	"status" : "pending"
}'
```

## Reference

- [Codementor Tutorial](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)
