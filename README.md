# Take Home App Template

This app was created so that it can be used as a template for applications that will be built during the interview process.

## Project Setup

It was bootstrapped using [Create React App](https://github.com/facebook/create-react-app).

## Common scripts

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view the app in the browser.

`npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Style Guide

ESLint has been setup and configured to use the [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript) in order to ensure code consistency and quality throughout the project.

## CSS Reset

In addition to a style guide, the app also contains a minimalist CSS Reset meant to make it easier to implement styles throughout the project.

```

/* CSS Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

```

## Testing

This project uses the default testing setup that comes with [Create React App](https://github.com/facebook/create-react-app).

This means that it uses:

- [jest](https://jestjs.io/) as its test runner.
- [jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/) for its custom set of DOM element matchers that can be used with Jest.
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) so that it is easy to test React components.
- [user-event](https://testing-library.com/docs/ecosystem-user-event/) to simulate browser interactions.

### How do you debug a test?

This project has also been configured so that it is easy to debug tests that are written for this project.

To debug a test in Google Chrome:

1. Place a `debugger;` statement at the line where you want the code to pause execution.
2. Run `npm run test:debug` in the Terminal.
3. Open `about:inspect` in Chrome.
4. Click the "inspect" link in the webpage.
5. Click the "Resume Script Execution" button.

The code should now pause execution at the `debugger;` statement that you placed in the file that you want to debug.