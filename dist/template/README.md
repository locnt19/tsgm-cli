## Architecture

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
