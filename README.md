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

## Installation
Once the project has been downloaded, use the following to install necessary libraries. Note: Command must be ran from within the backend directory. If you're in the project root (cen4910-proj) then you'll need to change directories.

```bash
$ cd backend # if you're in the project root
$ npm install
```

## Setup
Install PostgreSQL on your workstation. When prompted for root password, be sure to enter something you'll be able to remember. That password will need to be entered into the .env file or the server will not connect to the database. Once postgres is set up, the tables need to be created. This process is automated by TypeORM using migrations. To create your tables:

```bash
$ npm run typeorm:run-migrations
```

## Running the application
Once your libraries are installed and postgres is setup, you can run the server using the following command:

```bash
$ npm run start:dev
```
