### Web Scraper for Vanderbilt Sports Games

This script can be used to retrieve the upcoming sports games for any Vanderbilt sport.

## How to install?

1. Clone this repo
2. npm install *(optional: install nodemon globally to update on save)*
3. npm run start

## Where does the data go?

The data goes to the file `games.json` in the local directory.

## What is the structure of the JSON?

There are 5 entries in the JSON:

1. `sport`: the sport being played
2. `date`: the date the event starts
3. `time`: the time the event starts
4. `isHomeGame`: if the game is at home
5. `opponent`: the team or event being competed against.
