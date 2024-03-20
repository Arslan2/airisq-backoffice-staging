# AirisQ Backoffice Portal

## Quick start

0.  Fork the repo
1.  Clone repo using `git clone git@github.com:BlueTeaLondon/airisq-backoffice-portal.git`
2.  Move to the project directory: `cd airisq-backoffice-portal`.<br />
3.  Run `npm i` in order to install dependencies.<br />
4.  Create new file in root directory named `.env` and add following lines:<br />

```
TITLE = "Airisq Backoffice Portal"
```

5.  Now you can run `npm start` to see the app at `http://localhost:8080`

## Folder Structure

```
  -- src/
    -- @types/       -->  for custom typecsript types
    -- assets/       -->  for static assets and styles
    -- components/   -->  for components
        -- common/   -->  for shared components
    -- routes/       -->  for all routes
    -- sagas/        -->  for redux sagas
    -- services/     -->  for api requests
    -- slices/       -->  for slices created using @reduxjs/toolkit
    -- utils/        -->  for utility / helper functions
    -- views/        -->  for page specific/container components
```

## Quick Guide/Links

This project is built on [React Js](https://reactjs.org/) using [Typescript](https://www.typescriptlang.org/)

Here are list of libraries being used in this project:

- [Redux](https://redux.js.org/) for state management
- [Redux Saga](https://redux-saga.js.org/) for managing side-effect tasks
- [Axios](https://github.com/axios/axios) for making api calls
- [Redux Toolkit](https://redux-toolkit.js.org/) for consise redux code
- [React Router](https://reactrouter.com/en/main) for routing
- [Tailwind CSS](https://tailwindcss.com/) for styling

Formatting and linting

- [Aribnb style Guide](https://airbnb.io/javascript/react/) for rules, standards and conventions
- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for linting

Bundling and compiling

- [Babel](https://babeljs.io/) for transpiling
- [Webpack](https://webpack.js.org/) for bundling

Testing

- [React testing library](https://testing-library.com/docs/react-testing-library/intro/) for rendering react components in tests
- [Jest](https://jestjs.io/) for testing

## Other useful commands

`npm run lint` to fix automatically fixable lint errors

`npm run build` to build the project for production use

`npm run test` to run the tests


## Useful Tools

### React Dev tools

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
- [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

### Redux Dev tools

- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)
- [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)

### VS Code Extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
