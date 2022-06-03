# Ravn React Code Challenge

## Table of Contents

1. [Description](#description)

2. [Setup/Running instructions](#setuprunning-instructions)

3. [Stack](#stack)

4. [Project Structure](#structure)

5. [Technologies](#technologies)

6. [Development Process](#development-process)

7. [Testing](#testing)

## Description

The present Task Management App is a collaboration tool based on kanban that allows to organize projects into boards delegating responsibilites and establishing deadlines for each. There, multiple users in a same team can interact with it to create, check, update or delete the tasks assigned for the project.

## Setup/Running instructions

Once the repository is cloned, to install the dependencies, run the following command:

```bash
$ yarn install
```

Then, you can run the following command to start the development server:

```bash
$ yarn run dev
```

There, you can see the application running on the localhost:3000.

To run the project as if it were a production environment, first run the following command:

```bash
$ yarn run build
```

Then, you can run the following command to start the production server:

```bash
$ yarn run preview
```

## Stack

-  **Routing:** React Router

-  **Styles:** Styled Components

   -  I decided to use this approach for styling because this way it is easier to separate the styling from the semantic markup, making the components easier to read and understand.

-  **Testing:** Vitest

   -  I used this tool to test the components and the functionality of the app because it integrates well with the bundler used for the project.

## Project Structure

## Technologies

-  **Vite:** Tool for bundling the project

   -  I used this instead of the most common create-react-app because it is several times faster either at startup or while hot-reloading.

-  **Typescript:** superset of Javascript that allows to write code in a more readable way and to use type-checking

-  **Prettier:** Code formatter

   -  I used this to format the code before committing to the repository.

-  **ESLint:** Linter

   -  It is used to check the code for errors and to prevent them from being committed to the repository.

-  **lint-staged:** used to lint the code before committing

-  **Apollo Client:** GraphQL client

   -  It is used to connect the app to the GraphQL server.

-  **Framer Motion:** used to make complex animations

-  **React Icons:** used to create the Remix icons

## Development Process

## Testing
