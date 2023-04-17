# MoviePool App

### What is this about?

This MoviePool App is for movie lovers that want to be able to access information about different movies. It's the client-side to the [RESTful Movie API](https://github.com/EllyPirelly/cf-movie-api) and the R part of the MERN stack.
<br>
This App has been built as a task for Achievement 3 in [Career Foundry's Full-Stack Web Development Program](https://careerfoundry.com/en/courses/become-a-web-developer/).

### Technical requirements
- MERN stack must be used (React library)
- the MoviePool App
  - must use Parcel as its build tool
  - must be a single page application (SPA)
  - must be written in ES2015+
  - must contain function components
  - must use state routing to navigate
  - must use React Bootstrap (components, styling, responsivenss (Grid))
  - must include search feature
  - must be hosted online
  - may use React Redux for state management of at least one feature (i.e.,
filtering movies)

### Features
In this Movie App
- you are able to sign in (register as a new user), for this you need to pass
  - your username
  - a password
  - your email
  - your birth date
- once you are logged in with your username and password, you are able
  - to access information about movies
  - to create your own list of favorite movies in adding single movies to a (at start empty) list
  - to delete movies off of your list of favorite movies
  - to update your user information
  - to log out
  - TODO: search feature

### Languages, Libraries, Frameworks, Tools
- HTML
- SCSS
- JavaScript, JSX

### Dependencies
- `bootstrap` to customize bootstrap sass files
- `prop-types` to transmit data between components and validate the data type based on the app's configuration
- `react` to use the react library
- `react-bootstrap` to use the react version of bootstrap modules
- `react-dom` to use as entry point to the DOM, intended to be paired with `react`

### Dev Dependencies
- `Parcel` parcel.js as the build tool
  - `@parcel/transformer-sass` automatically comes with parcel to support Sass files
  - `Process` automatically comes with parcel to improve functionality of built-in process module

### How to run this?
- clone the repo
- `cd` into project
- `npm install`
- run parcel to build the project with `npm run start`
- this is going to start a local server on `http://localhost:1234`