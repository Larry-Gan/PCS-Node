# NODE Web

The front end web server of the National Open Data Elections (NODE) project.

## Setup

To install all dependencies, use `npm ci`.

```bash
npm ci
```

## Development

To run this project in development mode use the below command.

```bash
npm run develop
```

You should then be able to view the development site at [http://localhost:3000](http://localhost:3000).

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

Finally, to perform manual testing without using the development server, use storybook.

```bash
npm run storybook
```

You can view storybook at [http://localhost:6006](http://localhost:6006).

## Contributing

#### Adding Packages

If you need to add any new packages, add them using `npm i --save package` and `npm i --save-dev package`. Use the `--save` tag for packages needed in production and the `--save-dev` tag for other packages.

To update a package, use `npm update package` (or `npm update` to update all packages).

#### Pipeline

When you push a commit, the pipeline will first install all dependencies with `npm ci` and then create a production build with `npm run build`. If this succeeds, the next step will run unit tests, linting, and type checking. From here a deployment step can be added, or a service like Vercel can be connected to the repo.

#### Folder Structure

###### ./src/pages

This folder stores the pages that make up the frontend. All pages rendered on the website stem from this directory.

###### ./src/redux

This folder houses the redux actions, reducers adn store used.

###### ./src/modules

This folder houses the TodoPanel and TodoRecents. They are template modules that came with the repository. Helpful to look at for new react developers to understand how our TodoForm/Input works.

###### ./src/hooks

This folder houses the usePagnation hook. (Was not primarily used for this project)

###### ./src/global

Anna wanna do this one?

###### ./src/containers

This folder is a variety of components, layouts and resulting pages.

###### ./src/containers/Layout

This folder houses all the Layouts that are used for each specific page. Page files from ./src/pages usually implement a Layout that is house from this directory. Some layouts have a specific layout (I.E. the About page has an AboutLayout.tsx) however when in doubt most pages use the default layout (Layout.tsx). The structure of layouts is very similar and it is where the navbar, the main sections (ex/hero section or info sections) and the footer are conjoined.

###### ./src/containers/CorrectionModal

This folder houses the correction Modal component used for crowdsourcing

###### ./src/containers/TodoForm

This folder houses the TodoForm. This form is used on the main landing page as the input bar. It is in this file directory that you can view and modify the address autocomplete, the input bar itself and where dynamic page creation for results starts.

###### ./src/containers/OfficeHolderTemplate

This is the one page that is a not housed in the page folder since it is dynamically generated we wanted to keep it close to the TodoForm. The OfficeHolderTemplate file is where the page for results of elected officials is styled and rendered. You can also find the Apollo Client queries to the backend here.

###### ./src/components

This directory houses individual components and major sections (Like, Hero, about and info).

###### ./src/assets

This directory houses public images, tailwind and global styling configuration files.

## Usage

To create a production build use `npm run build`. Use commands below to start the production site locally.

```bash
npm run build
npm start
```

The production build can be visited at [http://localhost:3000](http://localhost:3000).
