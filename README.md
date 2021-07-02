# TSGM-CLI

This CLI helps to create new implemented API demo for Node with Typescript, Apollo GraphQL Server and MongoDB with Mongoose from a boilerplate.

## About the NPM Package

### Package Installation

```sh
npm install -g tsgm-cli
```

### Package Usage

Go to the directory on terminal where you want to generate the project.

```sh
$ cd PATH
```

and run the generator command with specifying the project name.

```sh
$ tsgm-cli --name="PROJECT_NAME"
```

## Documentation for the Boilerplate

When you generate the project, you will have:

### Tech Stack

- [Node.js]
- [Typescript]
- [GraphQL Apollo Server]
- MongoDB with [Mongoose]

### Features

- Multiple GraphQL Queries with implementations in Typescript
- Multiple GraphQL Mutations with implementations in Typescript
- Multiple GraphQL Schemas with implementations in Typescript
- Multiple Controllers with implementations in Typescript
- Multiple Mongoose Models with implementations in Typescript
- MongoDB Connection, Repository Layer implementations in Typescript
- CRUD operations for Multiple Entities with implementations in Typescript

### Architecture

This boilerplate has common graphql api design architecture.
**Layers:**

- **_Controllers_** holds implementation for the business logic, like retrieving data from repositories,
  returning those data to queries and mutations, saving data etc.
- **_Database_** holds MongoDB connection provider
- **_Models_** holds document interfaces, schema definitions and models for MongoDB & Mongoose
- **_Mutations_** holds basic mutation implementation; create, update, delete
- **_Queries_** holds basic query implementation; retrieve
- **_Resolvers_** holds resolver definitions for Apollo Server
- **_Schemas_** holds schema definitions for Apollo Server

### Installation

Install the dependencies and devDependencies:

```sh
$ cd <Project Name>
$ npm install
```

Set environment parameters on **.env**:

```sh
PORT="{{PORT NUMBER WHERE THE APP WILL WORK}}"
MONGO_DB_PATH="{{MONGODB CONNECTION URL STRING}}"
```

And that's all, start the server

```sh
$ npm start
```

## Documentation for the Generator Project

### Tech Stack

- [Node.js]
- [Typescript]

### Plugins

**tsgm-cli** is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin     | Usage                                                               |
| ---------- | ------------------------------------------------------------------- |
| [ejs]      | to render global parameters like Project Name                       |
| [inquirer] | to ask questions and parse input                                    |
| [shelljs]  | to eliminate your shell script's dependency on Unix                 |
| [yargs]    | to build interactive command line tools                             |
| [shx]      | to wrap around ShellJS Unix commands                                |
| [ts-node]  | to execute TypeScript and REPL for node.js, with source map support |

### Installation

**tsgm-cli** requires [Node.js] v14.16+ to run.

Install the dependencies and devDependencies and start the application.

```sh
$ cd tsgm-cli
$ npm install
$ npm start
```

To install the CLI globally:

```sh
$ npm run-script build
$ npm install -g .
```

And global usage:

```sh
$ tsgm-cli --name="PROJECT_NAME"
```

# Authors

- [**Fatih Türker**](https://www.linkedin.com/in/fatihtrker/)

# Contributors

- [**Loc Nguyen Thanh**](https://www.linkedin.com/in/locnt19/)

# License

---

MIT

[typescript]: https://www.typescriptlang.org
[node.js]: http://nodejs.org
[ts-node]: https://www.npmjs.com/package/ts-node
[shx]: https://www.npmjs.com/package/shx
[yargs]: https://www.npmjs.com/package/yargs
[shelljs]: https://www.npmjs.com/package/shelljs
[inquirer]: https://www.npmjs.com/package/inquirer
[ejs]: https://www.npmjs.com/package/ejs
[graphql apollo server]: https://www.apollographql.com/docs/apollo-server/
[mongoose]: https://mongoosejs.com/
