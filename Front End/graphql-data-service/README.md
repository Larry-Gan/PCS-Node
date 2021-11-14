# graphql-data-service

Provides and manages data from back-end microservices.

## Setup

To install all dependencies, use `npm ci`.

```bash
npm ci
```

## Development

To run this project in development mode use the below command.

```bash
npm start
```

You should then be able to view the development site at [http://localhost:5000/graphql](http://localhost:5000/graphql).

## Testing

To run tests, linting, and type checking, the below commands are used. These also run before each push.

```bash
npm test
npm run lint
npm run type-check
```

To help with formatting issues from linting, use prettier (this also runs automatically on each commit):

```bash
npm run format
```

## Contributing

#### Adding Packages

If you need to add any new packages, add them using `npm i --save package` and `npm i --save-dev package`. Use the `--save` tag for packages needed in production and the `--save-dev` tag for other packages.

To update a package, use `npm update package` (or `npm update` to update all packages).

#### Pipeline

When you push a commit, the pipeline will first install all dependencies with `npm ci` and then create a production build with `npm run build`. If this succeeds, the next step will run unit tests, linting, and type checking. If all three steps pass, it will build a docker image using the Dockerfile and publish it to the repository's container registry. Find the most recent docker image for your feature branch by looking for the image tagged with `FEATURE_BRANCH-latest`. You can also look up the image for a specific commit by using that commit's SHA.

These images can then be deployed to a test environment by running the depoy_dev pipeline step. Only images made from the master branch (tagged with `master-latest`) should be used in production, and these can be deployed via the deploy_prod step.

#### Folder Structure

###### ./src/config

This folder stores the configuration for the express server that runs the API.

###### ./src/datasources

This folder houses Apollo Datasource classes which are used as a wrapper to a given model or dataloader.

###### ./src/gql

This folder houses the Apollo server, Apollo schemas, and GraphQL resolvers.

###### ./src/loaders

This folder contains dataloaders for applicable models.

###### ./src/models

This folder contains models to query each backend microservice.

###### ./src/tests

This folder stores unit tests for each model.

## Usage

The primary way this project should be used is via the docker images created and deployed from its pipeline. To create a production build locally, use `npm run build`. Use the command below to start the production site locally.

```bash
node ./dist/app.js
```

The production build can be visited at [http://localhost:5000/graphql](http://localhost:5000/graphql).
