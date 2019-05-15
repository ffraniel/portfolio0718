---
path: '/world-cup-serverless'
title: 'Are England Still In the World Cup Russia 2018?'
shortname: 'World Cup 2018'
popup: 'Are England are still in the World Cup, using Google Firebase Serverless Functions'
link: 'https://areenglandstillintheworldcup.firebaseapp.com/'
blurb: 'Are England are still in the World Cup, using *Google *Firebase *Serverless *Functions'
mainimage: './EIWCFull.jpg'
---

![Front page of 'Are England still in the World Cup Russia 2018?'](EIWCFull.jpg)  

A website which shows if England are still in the world cup making use of a simple serverless setup using Firebase Functions.  

The site itself is hosted on Firebase hosting. Integration between their hosting service and their 'Functions' service was really quite satisfying. The front end makes a request to a database (which contains only one value!) to get the current status of the England team. The page initially shows a blurry loading screen. Then the value is returned, the screen blur is removed and the value is rendered to the page. 

![The serverless response when a request to update the status of whether England are in the world cup currently](EIWCbackend200.jpg)  

Above we see response from making a simple get request to the Functions back-end. I have sent a query value to the URL and that has updated the database appropriately and return me a confirmation.  

![The hidden backend reposne when an inccorect request is made to the serverless function](EIWCbackendErrorFull.jpg)  

Next we see what happens when i send a query value that is an invalid type (in this case any query that isn't a boolean).  

I always found these websites with one purpose, you know, to answer the question that is in their URL and title, to be kinda funny. Sometimes the web takes itself too seriously.  

I considered doing one for every team still in the World Cup but some of those flags would be pretty difficult to do in CSS (i'm looking at you Croatia and Brazil).  