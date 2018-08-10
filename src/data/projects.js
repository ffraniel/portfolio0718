import eurovisionImg from '../images/component-images/eurovisionFrontPage.jpg';
import beRedditImg from '../images/component-images/beItFull.jpg';
import feRedditImg from '../images/component-images/saidditFull.jpg';
import sanssouciImg from '../images/component-images/sanssouciFull.jpg';
import wikiImg from '../images/component-images/wikiSearchFull.jpg';
import worldcupImg from '../images/component-images/EIWCFull.jpg';

//eurovision specific
import eurovision1 from '../images/portfolio-images/eurovisionFrontPage.jpg'
import eurovision2 from '../images/portfolio-images/eurovisionQuestion.jpg';
import eurovision3 from '../images/portfolio-images/eurovisionCorrectAnswer.jpg';
import eurovision4 from '../images/portfolio-images/eurovisionFinalScore.jpg';

//saiddit BE
import BEsaiddit1 from '../images/portfolio-images/saidditBEWebLargeTop.jpg';
import BEsaiddit2 from '../images/portfolio-images/saidditBEMiddle.jpg';
import BEsaiddit3 from '../images/portfolio-images/saidditBEsall.jpg';

//saiddit FE
import FEsaiddit1 from '../images/portfolio-images/saidditFull.jpg';
import FEsaiddit2 from '../images/portfolio-images/saidditFEMid.jpg';
import FEsaiddit3 from '../images/portfolio-images/saidditFEComments.jpg';
import FEsaiddit4 from '../images/portfolio-images/saidditFESmallProfile.jpg';

//sanssouci
import sanssouci1 from '../images/portfolio-images/sanssouciFull.jpg';
import sanssouci2 from '../images/portfolio-images/sanssouciWebLargeTop.jpg';
import sanssouci3 from '../images/portfolio-images/sanssouciWebSmallBandcamp.jpg';
import sanssouci4 from '../images/portfolio-images/sanssouciWebMidGrid.jpg';

//wiki
import wiki1 from '../images/portfolio-images/wikiSearchFull.jpg';
import wiki2 from '../images/portfolio-images/wikiResults.jpg';
import wiki3 from '../images/portfolio-images/wikiSearchSmall.jpg';

//worldcup
import englandwc1 from '../images/portfolio-images/EIWCFull.jpg';
import englandwc2 from '../images/portfolio-images/EIWCbackend200.jpg';
import englandwc3 from '../images/portfolio-images/EIWCbackendErrorFull.jpg';

export default {
    projects: [
        {
            title: "Eurovision 2018 Lyrics Quiz built with React",
            popup: "Eurovision Lyrics Quiz using React",
            mainImage: eurovisionImg,
            portfolioImages: [eurovision1, eurovision2, eurovision3, eurovision4],
            text: ["I decided to make this the day before the Eurovision Finals. I spent a great deal of that time trying to find good sources of data about the songs. In order for this to be complete i would need to track down the details for every song; the artist, song title, lyrics and image of the act. I taught myself some rudimentary web scraping techniques, npm installed Cheerio and Require and got to work. It was a fun project working out how to automate collecting all the data.",
                "Then i put together the React app itself. On initial load it comes to an intro page. When you click to start the game i switch out the intro page for the 'GamePlay.js' component. This component starts on question and when an answer is given it flips over to answer mode.",
                "The position in the quiz and the score are kept on display in the GamePlay component. When all the rounds are complete it shows your score and asks if you want to play again, and the button just resets the game state to zero and shows the intro page."
            ],
            link: "https://eurovision-lyrics-2018.firebaseapp.com/",
            portfolioLink: "/eurovision-lyrics-quiz-react"
        },
        {
            title: "Saiddit BE: Back End for Reddit Clone",
            popup: "Back-end of a Reddit Clone RESTful API using NodeJS, Express and MongoDB",
            mainImage: beRedditImg,
            portfolioImages: [BEsaiddit1, BEsaiddit2, BEsaiddit3],
            text: ["A RESTful back-end with all the end-points necessary to feed whatever framework (or none) one may choose for the front-end. With endpoints for articles, articles filtered by subject, comments, voting on articles, voting on comments and user profiles.",
                "I used Node.js with Express.js and MongoDB. This is part of a larger full-stack project wherein I used React.js for the front-end.",
                "All the endpoints are fully tested using Mocha and Chai. The database is hosted on mLab.com. The project is currently hosted on Heroku."
            ],
            link: "https://vast-tundra-92428.herokuapp.com/",
            portfolioLink: "/saiddit-BE"
        },
        {
            title: "Saiddit: A React Reddit clone Front End",
            popup: "Front end of a Reddit Clone using React",
            mainImage: feRedditImg,
            portfolioImages: [FEsaiddit1, FEsaiddit2, FEsaiddit3, FEsaiddit4],
            text: ["The aim was to create a Reddit style single-page-app using React.js. In the app you would be able to read articles, sort them by subject matter, vote on the articles, post comments under an article, vote on those comments and view a user profile page.",
                "I used React.js and React Router for the routing. I did not use any style frameworks preferring instead to write the CSS myself. I used Proptype checking to make sure I had complete control of the data I was passing around my app.",
                "I used the fonts ‘Varela’ and ‘Playfair Display’, both from Google Fonts. ‘Varela’ is an elegant sans-serif design, great for extended reading without being boring or ugly, while ‘Playfair Display’, for headings and titles, is a little bit more ornate.",
                "The page has a responsive design allowing for comfortable viewing on mobile, tablet or desktop."
            ], 
            link: "https://sleepy-atoll-80436.herokuapp.com/",
            portfolioLink: "/saiddit-FE"
        },
        {
            title: "Sanssouci Band website",
            popup: "Band website using HTML, CSS and vanilla JS",
            mainImage: sanssouciImg,
            portfolioImages: [sanssouci1, sanssouci2, sanssouci3, sanssouci4],
            text: ["I wanted to create a beautiful website for the band Sanssouci. The website was to go live to coincide with the release of their first double a-side single in May 2017. It would show the artwork, it would include a music player (using an iframe from Bandcamp.com where the single would be on sale) and would give some information about the release.",
                "The majority of the page is HTML and CSS. Initially jQuery was used to give the smooth scrolling affects when navigation links are clicked and the Bootstrap framework for responsive layouts. In April 2018 I revisted the project to update things with best practice, a few minor tweaks to the design and to improve performance.",
                "I removed all the Bootstrap classes from the HTML markup and started writing CSS almost from scratch. Things look better on all screen sizes. I removed jQuery in order to reduce the page load time and instead added some custom JS to provide the smooth navigational scrolling.",
                "In order to speed up performance I had to remove a background colour effect where the colour would ease from pink slowly into a purple hue and then back again. The effect was subtle and looked great but the huge animation made the page run very slowly, particularly on mobile phones.",
                "Finally I used Gulp to minimise the CSS and JS respectively so that the website can serve an optimised page."
            ], 
            link: "http://sanssouci.uk/",
            portfolioLink: "/saiddit-FE-react"
        },
        {
            title: "Wikipedia Live Search",
            popup: "Search Wikipedia with instant feedback using React",
            mainImage: wikiImg,
            portfolioImages: [wiki1, wiki2, wiki3],
            text: ["A quick project that allows the user to search Wikipedia for topics of their choosing.",
                "A simple implementation of many of the essential ingredients of a React practice project with inputs and data fetching.",
            ], 
            link: "https://wikifetch.firebaseapp.com/",
            portfolioLink: "/wiki-fetch"
        },
        {
            title: "Are England Still In the World Cup Russia 2018?",
            popup: "Are England are still in the World Cup, using Google Firebase Serverless Functions",
            mainImage: worldcupImg,
            portfolioImages: [englandwc1, englandwc2, englandwc3],
            text: ["A website which shows if England are still in the world cup making use of a simple serverless setup using Firebase Functions.",
                "The site itself is hosted on Firebase hosting. Integration between their hosting service and their 'Functions' service was really quite satisfying. The front end makes a request to a database (which contains only one value!) to get the current status of the England team. The page initially shows a blurry loading screen. Then the value is returned, the screen blur is removed and the value is rendered to the page.",
                "Above we see response from making a simple get request to the Functions back-end. I have sent a query value to the URL and that has updated the database appropriately and return me a confirmation.",
                "Next we see what happens when i send a query value that is an invalid type (in this case any query that isn't a boolean).",
                "I always found these websites with one purpose, you know, to answer the question that is in their URL and title. I considered doing one for every team still in the World Cup but some of those flags would be pretty difficult to do in CSS (i'm looking at you Croatia and Brazil)."
            ], 
            link: "https://areenglandstillintheworldcup.firebaseapp.com/",
            portfolioLink: "/world-cup-serverless"
        },
        {
            title: "Are England Still In the World Cup Russia 2018?",
            popup: "Are England are still in the World Cup, using Google Firebase Serverless Functions",
            mainImage: worldcupImg,
            portfolioImages: [englandwc1, englandwc2, englandwc3],
            text: ["A website which shows if England are still in the world cup making use of a simple serverless setup using Firebase Functions.",
                "The site itself is hosted on Firebase hosting. Integration between their hosting service and their 'Functions' service was really quite satisfying. The front end makes a request to a database (which contains only one value!) to get the current status of the England team. The page initially shows a blurry loading screen. Then the value is returned, the screen blur is removed and the value is rendered to the page.",
                "Above we see response from making a simple get request to the Functions back-end. I have sent a query value to the URL and that has updated the database appropriately and return me a confirmation.",
                "Next we see what happens when i send a query value that is an invalid type (in this case any query that isn't a boolean).",
                "I always found these websites with one purpose, you know, to answer the question that is in their URL and title. I considered doing one for every team still in the World Cup but some of those flags would be pretty difficult to do in CSS (i'm looking at you Croatia and Brazil)."
            ], 
            link: "https://areenglandstillintheworldcup.firebaseapp.com/",
            portfolioLink: "/world-cup-serverless"
        }
    ]
};