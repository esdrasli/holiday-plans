# Documentation for the Holiday Planner Project

## Introduction
The Holiday Planner project is a web application designed to help users plan their holidays effectively. It allows users to create, view, edit, and delete holiday plans, as well as generate PDF documents of their plans.

## Libraries Used
### Backend:

**Express.js:** A web application framework for Node.js, used for building the backend REST API.

**Cors:** Middleware for enabling Cross-Origin Resource Sharing (CORS) in the Express application.

**Body-parser:** Middleware for parsing incoming request bodies in the Express application.

**sqlite3:** A Node.js package for interacting with SQLite databases.

### Frontend:

**React.js:** A JavaScript library for building user interfaces.

**Styled-components:** A CSS-in-JS library for styling React components.

**Axios:** A promise-based HTTP client for making API requests from the browser.

**@react-pdf/renderer:** A library for generating PDF documents in React applications.

**Jest:** A JavaScript testing framework for writing unit tests.


## Components

### Backend Components:

**Express Server:** Handles HTTP requests and responses, serves as the backend for the application.
**SQLite Database:** Stores holiday plans data.
**API Routes:** Define endpoints for CRUD operations on holiday plans.


### Frontend Components:

**Dashboard:** The main component displaying holiday plans, allowing users to add, edit, delete, and generate PDFs of plans.

**HolidayPlanCard:** Represents a single holiday plan, displaying its details and providing options to edit, delete, or generate a PDF.

**HolidayPlanForm:** A form for adding or editing holiday plans.

**PDFGenerator:** Component for generating PDF documents of holiday plans.

**HolidayPlanList:** Component to display a list of holiday plans.


### API Endpoints

**GET** /api/plans: Retrieves all holiday plans from the database.

**POST** /api/plans: Adds a new holiday plan to the database.

**PUT** /api/plans/:id: Updates an existing holiday plan in the database.

**DELETE** /api/plans/:id: Deletes a holiday plan from the database.


### Tests

**HolidayPlanCard Test:** Tests rendering of holiday plan details and buttons for editing, deleting, and generating PDFs.

**HolidayPlanList Test:** Tests rendering of a list of holiday plans.

**PDFGenerator Test:** Tests rendering of PDF document with holiday plans.

### Frontend Structure

***DashboardContainer:*** Container component for the entire dashboard, with styling and layout.

***GridContainer:*** Grid layout for displaying holiday plans.

***AddPlanButton:*** Button for adding a new holiday plan.

***HolidayPlanCard:*** Component for displaying individual holiday plans with options for editing, deleting, and generating PDFs.

## Running the Backend, Frontend, and Tests

This guide will walk you through the steps to run the backend, frontend, and tests for the Holiday Planner project.

## Backend
### Prerequisites
***Node.js*** installed on your machine. You can download and install it from the official Node.js website.

### Steps to Run the Backend
***Install Dependencies:***
Open a terminal in the project folder and run the following command to install all necessary dependencies:
```
cd holiday-plans-api
npm install
```

Start the Server:
After installing dependencies, execute the following command to start the server:

```
node index.js
```

This will start the Express server on the specified port (by default, port 5000).

Verify the Server is Running:
After starting the server, open a web browser and access http://localhost:5000/api/plans. You should receive a response with holiday plan data, or a message indicating there are no holiday plans if the database is empty.

### Testing the Routes:
You can test the server routes using tools like Postman or cURL by making HTTP requests to http://localhost:5000/api/plans to get all plans, http://localhost:5000/api/plans/:id to get a specific plan, and so on.

### Stopping the Server:
To stop the server, press Ctrl + C in the terminal where the server is running.

## Frontend
### Steps to Run the Frontend
***Install Dependencies:***
Open a new terminal window/tab in the project folder and run the following command to install frontend dependencies:

```
cd holiday-plans
npm install
```

***Start the Frontend Server:***
After installing dependencies, execute the following command to start the frontend server:

```
npm start
```

This will start the React development server, and your default web browser will open the application at http://localhost:3000.

## Tests
### Steps to Run Tests

## Run Tests:
To run frontend tests, open a terminal in the frontend folder and execute the following command:

```
npx react-scripts test
```

This will run all the tests for the frontend components using Jest.

## Conclusion

The Holiday Planner project provides a comprehensive solution for managing holiday plans, with a user-friendly interface for creating, editing, and viewing plans, as well as generating PDF documents for easy sharing and printing. With a well-structured backend API and robust frontend components, it offers a seamless experience for users to organize their vacations efficiently.




