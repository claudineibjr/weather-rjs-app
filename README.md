# Weather Information

This project aims to view weather information from the user's location.

## Pages
- **Home Page**: https://claudineibjr.github.io/weather-rjs-app/
- **Detailed weather information**:
	- https://claudineibjr.github.io/weather-rjs-app/#/Sunday
	- https://claudineibjr.github.io/weather-rjs-app/#/Monday
	- https://claudineibjr.github.io/weather-rjs-app/#/Tuesday
	- https://claudineibjr.github.io/weather-rjs-app/#/Wednesday
	- https://claudineibjr.github.io/weather-rjs-app/#/Thursday
	- https://claudineibjr.github.io/weather-rjs-app/#/Friday
	- https://claudineibjr.github.io/weather-rjs-app/#/Saturday

## Features
- **Display weather information about next 5 days**: It shows resumed 5 days weather information. The informations displayed at home page are: minimum and maximum temperature and main weather information (e.g.: rain, clouds, snow, clear);
- **Load user location**: The user location is loaded for the react page knows what location will be used to display weather information;
- **Display weather information for a specific day**: It shows detailed temperature for a day. The OpenWeatherMap API makes available a temperature every 3 hours.
	- A graph with the day's temperatures is displayed.
	- For the last day of sequence of 5 days, the chart could be incomplete. This happens because OpenWeatherMap API makes avaialable temperatures since request moment to 120 hours.
		- Example: If the request was done at Friday 3 PM (06 August), the OpenWeatherMap API response it will contain data since **06 August 2021 6 PM** until **Wed Aug 11 2021 3 AM**.

## Specific plugins and packages
* **@material-ui/core**: React components for faster and simpler web development. Build your own design system, or start with Material Design.
* **axios**: Promise based HTTP client for the browser and node.js
* **class-transformer**: Its ES6 and Typescript era. Nowadays you are working with classes and constructor objects more than ever. Class-transformer allows you to transform plain object to some instance of class and versa. Also it allows to serialize / deserialize object based on criteria. This tool is super useful on both frontend and backend.
* **d3-array**: Data in JavaScript is often represented by an iterable (such as an array, set or generator), and so iterable manipulation is a common task when analyzing or visualizing data. For example, you might take a contiguous slice (subset) of an array, filter an array using a predicate function, or map an array to a parallel set of values using a transform function. Before looking at the methods that d3-array provides, familiarize yourself with the powerful array methods built-in to JavaScript.
* **node-sass**
* **react-redux**: Official React bindings for Redux. Performant and flexible.
* **react-router-dom**: DOM bindings for React Router.
* **redux**: Redux is a predictable state container for JavaScript apps.
* **@vx/vx**: The one stop install for all vx packages.