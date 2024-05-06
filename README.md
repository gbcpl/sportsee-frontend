# Sportsee

Develop an analytics dashboard with React - OpenClassrooms - Project 12  
In this project, I had to use an API to fetch users's data in order to display an analytics dashboard with charts from the Recharts library.

## Prerequisites 

- NodeJS (latest versions for the frontend app)
- NodeJS v. 12.18.0 for the backend (API)
- NPM
- NVM to change NodeJS version
- Yarn

## Backend

The backend of this project is an API service used to fetch users's data about their personal training.  
You can find it here and fork it: https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard

Before launching the backend, use the v. 12.18.0 of NodeJS.  
First, install it with the command 'nvm install 12.18.0'.  
Secondly, change the version of NodeJS with 'nvm use 12'.  
Launch the backend with either 'yarn dev' or 'npm run dev'.  
The API should be available on http://localhost:3000/. The routes are noted in the routes.js file present in the app folder.

## Frontend

The frontend was initialized with Vite + React and uses the Recharts library to create charts displaying datas from a user's personal training. 

Fork this repository and launch it with the command 'npm run dev'. Don't forget first to change the NodeJS version to one of the latest versions, otherwise it won't work.

Access to our two users charts through the URLs /user/12 and /user/18.
