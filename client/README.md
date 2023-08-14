# Blogger Frontend App Documentations

This documentation provides an overview of the Blogger frontend app, its components, and how to set it up for development and deployment.

## Introduction

The Blogger frontend app is built using React and leverages various libraries and frameworks to create a user-friendly blogging platform. Users can register, log in, write blogs, and view their own posts.

## Dependencies

### Key Dependencies

- React: A JavaScript library for building user interfaces.
- React Router Dom: For handling routing and navigation within the app.
- Axios: A promise-based HTTP client for making API requests.
- Tailwind CSS: A utility-first CSS framework for styling the app.
- React Quill: A rich text editor component for creating blog content.

## Table of Contents

- [Introduction](#introduction)
- [Dependencies](#dependencies)
- [Key Dependencies](#key-dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Running Locally](#running-locally)
- [Deployment](#deployment)
- [Components](#components)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [Contact](#contact)


## Authentication
The app uses JWT-based authentication. The AuthContextProvider manages user authentication, and the Login and Register components facilitate user login and registration.

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

## Contributing
Contributions to the Blogger frontend app are welcome! If you wish to contribute, please follow these guidelines:
1. Fork the repository.
2. Create a new branch for your feature/fix: git checkout -b feature/my-feature.
3. Make your changes and test thoroughly.
4. Commit your changes: git commit -m "Add a descriptive commit message".
5. Push to your branch: git push origin feature/my-feature.
6. Create a pull request against the main branch.



