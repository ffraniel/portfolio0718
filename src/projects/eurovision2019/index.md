---
path: '/eurovision-2019'
title: 'Nul Points! Eurovision 2019 Lyrics Quiz built with React'
shortname: 'Nul Points! - Eurovision 2019'
popup: 'Eurovision Lyrics Quiz using React'
link: 'https://eurovision2019.surge.sh/'
blurb: 'Guess the nationality of the song from a small given snippet of the lyrics. Built with *React.js'
mainimage: './eurovision2019front.jpg'
---

![Front page of Eurovision app](eurovision2019front.jpg) 

In 2018 i made a Eurovision lyrics quiz app with React.js. I threw it together with some particularly hack-y use of Cheerio and Request.js to fetch the data and i pieced together the game in React.js. As you can see below the design was super basic.

![The 2018 version of the game, altogether less pretty](eurovision2018.jpg) 

As Eurovision 2019 rolled onto the horizon i thought i would make an updated version. Plus it's good to see, even in a relatively throwaway project such as this, how very far my coding has developed. I set a rule of not spending a long time on it. And yet i was able to create a vastly superior design. 

![Questions and options](eurovision2019question.jpg)  

This time around I included use of the Speech Synthesis API available in modern browsers to speak the lyrics back to the player.

![Showing the correct answer and whether the user was correct](eurovision2019answerMob.jpg)  

The web scraping took minutes rather than the hours it did last year. Every element of the code was improved with a full rewrite. It's a goofy project but i really like Eurovision and it's a nice excuse to have some creative coding fun.

![Results page with the score out of 5](eurovision2019results.jpg)  