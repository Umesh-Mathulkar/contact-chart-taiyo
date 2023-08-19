# Contact Management App with Charts and Maps

This is a contact management app with Charts and Maps built using ReactJS, TypeScript, TailwindCSS, React Router v6 and React Query.

## Features

- The app has a Contacts page with a form for adding new contacts, a list of all added contacts, and the ability to view, edit, and delete contacts.
- The app has a Charts and Maps page with a simple dashboard that displays a line graph showing the cases fluctuations and a react leaflet map with markers indicating the country name and case data.
- The app uses Redux to store the contact data and React Query to handle API calls and data management.
- The app is styled using TailwindCSS and is responsive on both desktop and mobile devices.

## API Endpoints

- World wide data of cases: `https://disease.sh/v3/covid-19/all`
  This endpoint returns data on the total number of COVID-19 cases, deaths, and recoveries worldwide. The data is returned in JSON format and includes information such as the total number of cases, deaths, and recoveries, as well as the number of cases, deaths, and recoveries per one million population.

- Country Specific data of cases: `https://disease.sh/v3/covid-19/countries`
  This endpoint returns data on the total number of COVID-19 cases, deaths, and recoveries for each country. The data is returned in JSON format and includes information such as the country name, population, and flag image URL, as well as the total number of cases, deaths, and recoveries, and the number of cases, deaths, and recoveries per one million population.

- Graph data for cases with date: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
  This endpoint returns historical data on the total number of COVID-19 cases, deaths, and recoveries worldwide. The data is returned in JSON format and includes information such as the date and the total number of cases, deaths, and recoveries on that date.

## Getting Started

1. Install `Node.js` and `npm` on your system if you don't have them already. You can check if they are installed by running `node -v` and `npm -v` in your terminal. If they are not installed, you can download them from the official website.

2. Clone the repository or download the source code of the app.

3. Open a terminal and navigate to the root directory of the app.

4. Run `npm install` to install all the dependencies.

5. Run `npm start` to start the development server. The app is now running on `http://localhost:3000`.

## Usage

- To add a new contact, navigate to the Contacts page and fill out the form with the contact's information. Click the "Add Contact" button to save the contact.
- To view, edit, or delete a contact, click on the corresponding button next to the contact's name in the list of contacts.
- To view the Charts and Maps page, navigate to it from the main menu. The line graph and map will automatically update with data from the API endpoints.
