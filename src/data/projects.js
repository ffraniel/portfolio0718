import eurovisionImg from '../components/component-images/eurovisionFrontPage.jpg';
import beRedditImg from '../components/component-images/beItFull.jpg';
import feRedditImg from '../components/component-images/saidditFull.jpg';
import sanssouciImg from '../components/component-images/sanssouciFull.jpg';
import wikiImg from '../components/component-images/wikiSearchFull.jpg';
import worldcupImg from '../components/component-images/EIWCFull.jpg';

export default {
    projects: [
        {
            title: "Eurovision 2018 Lyrics Quiz built with React",
            popup: "Eurovision Lyrics Quiz using React",
            image: eurovisionImg
        },
        {
            title: "Saiddit BE: Back End for Reddit Clone",
            popup: "Back-end of a Reddit Clone RESTful API using NodeJS, Express and MongoDB",
            image: beRedditImg
        },
        {
            title: "Saiddit: A React Reddit clone Front End",
            popup: "Front end of a Reddit Clone using React",
            image: feRedditImg,
        },
        {
            title: "Sanssouci Band website",
            popup: "Band website using HTML, CSS and vanilla JS",
            image: sanssouciImg,
        },
        {
            title: "Wikipedia Live Search",
            popup: "Search Wikipedia with instant feedback using React",
            image: wikiImg,
        },
        {
            title: "Are England Still In the World Cup Russia 2018?",
            popup: "Are England are still in the World Cup, using Google Firebase Serverless Functions",
            image: worldcupImg,
        }
    ]
};