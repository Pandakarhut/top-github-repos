# GitHub Top Repositories!
This project fetches the most starred GitHub repositories using the GitHub API. It was created using ReactJS and bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The app has two buttons to search either all GitHub repositories, or only Futurice repositories, and rank them by the amount of stars they have from users. Each entry in the list provides a link to visit that repository.

The GitHub API has rate limiting in case of too many requests. In those cases, an error message is displayed and you may resume again after a while.

## [Check out the working demo!](https://pandakarhut.github.io/top-github-repos/)

![Most starred GitHub repositories](/docs/screenshot.png "You can fetch all repositories or just Futurice ones")

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Automatically builds the app and deploys it to GitHub pages as configured in the `package.json` file.