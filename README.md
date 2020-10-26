# OpenCountries

OpenCountries is developed to give people informed, data-based decisions when deciding what countries they are permitted to travel to. Throughout 2020, the international travel have has had varying levels of restrictions. Additionally, countries are constantly changing their ingress/egress requirements based on local health officials advisement. I hope OpenCountries can show people the best way to book their upcoming travel abroad! 


## Backend Repository
https://github.com/estein1988/covid_travel_be

## Demo Video
[Demo Video](https://www.youtube.com/watch?v=EJxe8f53hs8&feature=youtu.be)

## Built With
Frontend: React, React-Leaflet, Semantic UI, Material UI<br>
Backend: Ruby 2.6.1 on Rails 6.0.3

- API for Country restriction data: [Join Sherpa](https://docs.joinsherpa.io/)
- API for United States statistics: [Covid Tracking Project](https://covidtracking.com/data/api)
- API for case count by coordinates: [Smart Check Travel API](https://smartcheck.travel/)
- API for GeoCode location search and basemap: [Mapbox](https://docs.mapbox.com/api/search/)

## App Features

### GeoSearch
Through a controlled form, the user can type in the field any location in the world. The field works for any city, address or location name (e.g. "Denver", "1600 Pennsylvania Washington D.C." or "Lost Lake"). The top 5 results from the user's search will render in a card format. The user can then take the coordinates returned from the card results and include them in the next controlled form (lookup current case count). The second form will return the current active Covid case in the that location's vicinity, and current tally of deaths reported. 

### Map Page
The map page dynamically renders each country's placeholder from a lat/long array on the application's backend. Additionally, each placeholder is conditionally rendered based on the country's current "open status" (closed renders to a red icon and all other country's are blue). When the placeholder is clicked, additional information regarding the country's restrictions are displayed in a pop-up. 

### Country Cards
This page uses the same end-point from the map, but displays the data in the form of cards (and shows a few more additional notes and requirements for each country). Two search fields are given, one which searches by Country Name and the other by Current Status (open, closed, mostly closed, etc.). Each country's avatar conditionally renders based on its status (green is open, red for all other countries). The user can toggle down each country's card to display additional info., and also add cards to the top of the page with favorite icon (each country card is only allowed to be added one-time).

### Table Page
The final page of the application shows United State Covid-statistics, from the initial onset of the pandemic (1/22/2020 - present). I believe the API endpoint (Covid-Tracking) updates daily early-afternoon when each state has submitted their statistics from the prior day. The table conditionally renders a green, yellow or red background on certain columns based on past results for the United States. 


## Challenges
- Finding good, reliable data sources at no cost. There are many APIs out there which track travel restrictions, but most of them are very expensive ($999/month). All 5 APIs that I used were free. When first reviewing the primary API I was relying on (https://docs.joinsherpa.io/), the data looked perfect (exactly what I was seeking. When working with the data further, it seemed more apparent that it had not been updated in quite some time (3-4 months). I scoured for a backup source, but I couldn't find anyone offering the data for free. I reached out to several endpoint admin's and asked them if I could use the data for a only a school project and not deploy the app, but none were willing to provide.

- Learning a mapping software on-the-fly. My school's circulium does not teach any mapping software in their normal course-work. I tried to render a map using ESRI's endpoint, but wasn't successful in layering data on top of their basemap. Leaflet was a great, easy package to use, and laying MapBox's base map on top of Leaflet provided for an excellent UI in my opinion. 

- From a technical standpoint, the two-criteria search fields in the "Country Cards" page was the hardest to crack. To put it in layman's terms, it's like doing a "ctrl+f" on top of another "ctrl+f" in your browser. To solve the problem, it required a new lifecycle method to be introduced to me: `componentDidUpdate()`.

- This was the full-stack app I developed using React (and the first app I developed using a FE framework). React has a steep learning curve in the beginning, but I'm really growing to love it!

## Future Implementation

- Pay for Covid travel data so the API endpoint can be more up-to-date based on the current enviornment. 
- Add a graphical representation of current United States data. 
- Connect the app with travel booking sites (Kayak, Expedia or airlines)

## Collaboration

1. Fork and/or clone this repo & the backend repo: https://github.com/estein1988/covid_travel_be
2. Install Ruby gems: `bundle install`
3. Migrate database tables in backend and seed: `rails db:migrate` and `rails db:seed`
4. Run backend server: `rails s`
5. Install dependencies on frontend: `npm install`
6. Run frontend server: `npm start`
7. Checkout new branch
   

If you'd like to collaborate on this project, please email me: estein1988@gmail.com or at https://www.linkedin.com/in/steinelliott/ 