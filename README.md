# cen4910-proj
Combined repository for all three groups.

This project consumes the SW API project. Documentation for this project can be found here: https://swapi.dev/documentation

## Original Project Definition
Project - Star Wars Game

Data scrape from that API to get character images - Django REST framework (swapi.dev)

Using SpringBoot framework for backend
Using MySQL database integration with SpringBoot
Using GItHub for repository to share code for groups
Using React or Thyme Leaf for front end website UI
Using React Native or Flutter for Mobile App Front end UI

Create a game where the users sign in (security) and play a game where the characters scrapped form the API has to go through some challenges to save the day.  The user information is stored in the database along with scores and other gameplay information.  Implemented with a website, and mobile app for the front-end UI.
3 groups - backend (SpringBoot), UI website (React or Thyme Leaf), UI mobile app (React Native or Flutter).

I have placed you in three groups.  Please discuss with each other and decide which group will be assigned the backend, or UI Website, or UI mobile app.

## Backend
Reference backend readme for more detail. This is a Quickstart for the backend portion of the application to run locally. 

### Prerequisites
* PostgreSQL
* NodeJs
* Npm

### Installation
Once the project has been downloaded, use the following to install necessary libraries. Note: Command must be ran from within the backend directory. If you're in the project root (cen4910-proj) then you'll need to change directories.

```bash
$ cd backend # if you're in the project root
$ npm install
```

### Setup
Install PostgreSQL on your workstation. When prompted for root password, be sure to enter something you'll be able to remember. That password will need to be entered into the .env file or the server will not connect to the database. Once postgres is set up, the tables need to be created. This process is automated by the server via syncing but this is not recommended for production environments. Migrations are meant to be used to build the database schema. Fixtures files would be needed, too, in order to seed data.

Update: An export of test data has been dropped into the test folder. If you restore this data you'll be able to see data returned from postman testing.

### Running the application
Once your libraries are installed and postgres is setup, you can run the server using the following command:

```bash
$ npm run start:dev
```

### Testing
Join the Postman Workspace to access the pre-built test requests.

https://app.getpostman.com/join-team?invite_code=8ce2b7c5553938d7c0cbc1c3e1fedd89&target_code=8dbe2885847208e01248d53fe02d3335

Update: The Postman workspace is full. I've dropped the workspace into the test folder. You can import the project from there into postman to test. Keep in mind that a user needs to be created, and the access token needs to be set up as a bearer token in the header. This should already be done but the token will need to be updated as it expires every 15 minutes.

### Notes
The .env file included is a sample. You can follow along with it for the Postgres install or do your own thing. Typically this file is not added to a repository as it'll usually house very sensitive data, like keys or service accounts.
