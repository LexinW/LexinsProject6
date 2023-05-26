## Your Task

Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [5 Day Weather Forecast](https://openweathermap.org/forecast5) to retrieve weather data for cities. The base URL should look like the following: `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`. After registering for a new API key, you may need to wait up to 2 hours for that API key to activate.

**Hint**: Using the 5 Day Weather Forecast API, you'll notice that you will need to pass in coordinates instead of just a city name. Using the OpenWeatherMap APIs, how could we retrieve geographical coordinates given a city name?

You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, and the wind speed
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city



WHAT HAVE I DONE::::


I first went through and started to setup and name all the elements in the HTML file so I can later go in and correct their values when I implement the API. 

I added bootstrap half way through because I was struggling with the buttons

I added a sidebar to contain all the buttons and their information. I also created a weatherInfo for the clicked city in the search bar, and Im also making a fiveDayForecast element to add the 5 cards for the 5 day forecast. 

So far I've styled and organized the webpage, Now I need to add the javascript functionality and weather API.

I started adding the Javascript functionality. I started with a bunch of research and reading on the api and how to implement, I watched a video about someone creating a similar application with this API.

I first want the searh bar to search for the city and get the data from the API, then apply that data to the weather info card, which is the first section showing the city name, date, temp, wind, and humidity.

Once I got the API working and console logging out the info, I then created a function to update the HTMl with the data from the API to the appropriate spots. 

I got the buttons to also apply the proper city name and info to the weather info card when those buttons are clicked. 

I've been struggling getting the 5-day forecast to work. I cant seem to figure out how to update EACH card individually with 5 days of different information. 

I also can not get the date to display next to the city name. I tried adding DayJS, but still had no luck. Watch some videos and nothing was working for me. I don't know what I was doing wrong on this part.

Im going to include a screenshot of the current application I have working close to the deadline.

I'm going to come back to the project and finish it this weekend based on the comments I receive from grading and the extra research im going to do. 

This was the most challening project so far, but I feel I spent the most time studying this and trying to really make sure Im understanding each line of the code. 

Screenshot (5/25): 
![Screenshot 2023-05-25 210807](https://github.com/LexinW/LexinsProject6/assets/10322786/9c85875d-e4af-4f04-ab1c-7b716c6a8569)



