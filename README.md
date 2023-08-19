# Contact Management App with Charts and Maps

This is a contact management app with Charts and Maps built using ReactJS, TypeScript, TailwindCSS, React Router v6 and React Query.

## Objectives

### Page Contacts
- The app should have a form for adding new contacts
- The app should display a list of all added contacts
- Each contact should have a button to view the contacts details
- The app should be able to edit and delete contacts
- Make use of Redux to store the contact data

### Page Charts and Maps
- Build a simple dashboard with:
    - A line graph showing the cases fluctuations
    - A react leaflet map with markers that indicates the country name, total number of active, recovered cases and deaths in that particular country as a popup.

## API Endpoints
- World wide data of cases: `https://disease.sh/v3/covid-19/all`
- Country Specific data of cases: `https://disease.sh/v3/covid-19/countries`
- Graph data for cases with date: `https://disease.sh/v3/covid-19/historical/all?lastdays=all`

## How to run the app

1. Make sure you have `Node.js` and `npm` installed on your system. You can check if they are installed by running `node -v` and `npm -v` in your terminal. If they are not installed, you can download them from the official website.

2. Clone the repository or download the source code of the app.

3. Open a terminal and navigate to the root directory of the app.

4. Run `npm install` to install all the dependencies.

5. Run `npm start` to start the development server. The app should now be running on `http://localhost:3000`.
