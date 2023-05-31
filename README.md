# Node API Demo

[![Build Status](https://travis-ci.org/imanilchaudhari/express-app.svg?branch=master)](https://travis-ci.org/imanilchaudhari/express-app)

Demo app built with ExpressJS.

## Tech Stack

- Node.js 16
- NPM Libraries
  - Nodemon for Debugging and keeping track of changed files
  - Express for initiating the server
  - Mongoose for interracting with MongoDB
  - BodyParser to parse request body
- MongoDB 4.0 (Docker container recommended)

## Walkthrough

### Set-up Mongo Docker (Recommended)

```
docker compose -f "docker-compose.yml" up -d --build
```

### Starting the REST API Server

```
nodemon server.js

OR

npm start run
```

### Create a sample post

```
curl -X POST \
  http://localhost:3000/posts \
  -H 'Accept: */*' \
  -H 'Accept-Encoding: *' \
  -H 'Content-Type: application/json' \
  -H 'Host: localhost:3000' \
  -d '{
	"title" : "Post Title",
	"content" : "Post content goes here."
}'
```

## Reference

- [Codementor Tutorial](https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd)
