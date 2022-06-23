<h1 align="center">Welcome to Stage Tracker 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

## Install

```sh
cd backend
yarn install
```

## How to run project

```sh
docker-compose up --build
cd backend
yarn dev
```
## Description of commands

### `docker-compose up -d --build`

Builds and starts the containers for the Postgres database and Hasura Console alongside each other.
It can take a few seconds after the containers have started until the Database is fully initialized and seeded.
* Open [http://localhost:8080](http://localhost:8080) for the **Hasura Console**

## About Hasura GraphQL Engine

Hasura GraphQL Engine is a blazing-fast GraphQL server that gives you **instant, realtime GraphQL APIs over Postgres**, with [**webhook triggers**](event-triggers.md) on database events, and [**remote schemas**](remote-schemas.md) for business logic.

Hasura helps you build GraphQL apps backed by Postgres or incrementally move to GraphQL for existing applications using Postgres.

Read more at [hasura.io](https://hasura.io) and the [docs](https://hasura.io/docs).


## Author

👤 **Amin Azimi**


## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
