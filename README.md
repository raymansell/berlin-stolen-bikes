# Berlin Stolen Bikes

> Frontend web application that displays reported cases of stolen bikes in the Berlin area.

![screenshot](https://i.imgur.com/8gcdlwp.png)

## About

This project uses the [ReqRes](https://reqres.in/) API for user authentication purposes. For this reason, you should use a valid email of their users list to log in or sign up, e.g eve.<span>holt@reqres</span>.in (any password will suffice).

Reported cases of stolen bikes are fetched from the [BikeWise API](https://www.bikewise.org/documentation/api_v2).

## Features

- Route protection for unauthenticated users.
- Form validation logic via an useForm custom hook.
- Pagination based on the API's resource availability.
- Filtering functionality based on description and dates on which the thefts were reported.
- Loading state with skeleton screens.

## Live demo

[Check it out!](https://berlin-stolen-bikes.netlify.app)

## Usage

### Dependencies and setup

```
npm install
```

Create a .env file in the root directory containing the following:

```
REACT_APP_REQRES_API=https://reqres.in/api
REACT_APP_BIKEWISE_API=https://bikewise.org:443/api/v2/incidents?per_page=10&incident_type=theft
```

### Run

```
npm start
```
