# rest-api-mysql

> A sample REST-API

## Prerequisites

- [Docker](https://docs.docker.com/engine/installation)  
- [Docker compose](https://docs.docker.com/compose/install/)  
- [nvm - Node Version Manager](https://github.com/nvm-sh/nvm)

## Getting started

```sh
docker-compose up
```

Run App Container Terminal

```sh
docker exec -it api_app sh
```

## Development

```sh
cd api

# Setup node version equal to the dockerized version
nvm install 12.16.1
nvm use

# Install feathers js cli
npm install @feathersjs/cli -g
```

## Feathers CLI

See [Docs](https://docs.feathersjs.com/guides/basics/generator.html#generating-the-application)

### Create a new Service

The results, see /api/src/services/posts/

```sh
feathers generate service

# What kind of service is this?                    Sequelize
# What is the name of the service?                 posts
# Which path should the service be registered on?  /posts
# Does the service require authentication?         No
```

### Create a new Hook

The results, see /api/src/hooks/process-post.js

```sh
feathers generate hook

# What is the name of the hook?             process-post
# What kind of hook should it be?           before
# What service(s) should this hook be for?  posts
# What method shoud this hook be for?       create
```

## API Endpoints

Create Post

```sh
curl -H "Content-Type: application/json" -X POST -d '{"title":"My Post", "text":"Lorem ipsum"}' http://localhost:3030/posts
```

Get Posts

```sh
curl -H "Content-Type: application/json" -X GET http://localhost:3030/posts
```


## Services exposed outside your environment

Webserver: [localhost:8080](http://localhost:8080)  
MariaDB: 127.0.0.1:3306  
