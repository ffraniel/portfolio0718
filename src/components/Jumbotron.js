import React from 'react'
import './Jumbotron.css';

//images
import html5 from '../images/logos/html5.png';
import css3 from '../images/logos/css3.png';
import js from '../images/logos/js.png';
import reactimg from '../images/logos/react.png';
import express from '../images/logos/express.png';
import node from '../images/logos/node.png';
import mongodb from '../images/logos/mongodb.png';
import git from '../images/logos/git.png';
import github from '../images/logos/github.svg';
import next from '../images/logos/next.png';
import npm from '../images/logos/npm.png';
import firebase from '../images/logos/firebase.png';
import heroku from '../images/logos/heroku.png';
import gatsby from '../images/logos/gatsbyjs.png';

const Jumbotron = () => (
    <div className="jumbo">
        <h3 className="title-heading">fran the dev</h3>
        <span className="underline"></span>
        <h5 className="title-heading-subtitle">Javascript & Web Developer</h5>
        <div className="logos-array">
            <img src={html5} alt="HTML 5" />
            <img src={css3} alt="CSS 3" />
            <img src={js} alt="Javascript" />
            <img className="double-width" src={node} alt="Node.js" />
            <img className="double-width" src={reactimg} alt="React.js" />
            <img className="triple-width" src={express} alt="Express.js" />
            <img className="triple-width" src={mongodb} alt="MongoDB" />
            <img className="double-width" src={git} alt="Git" />
            <img src={github} alt="Github" />
            <img className="double-width" src={next} alt="Next.js" />
            <img className="double-width logo-shrink-height" src={npm} alt="NPM" />
            <img className="triple-width" src={firebase} alt="Google Firebase" />
            <img src={heroku} alt="Heroku" />
            <img src={gatsby} alt="Gatsby.js" />
        </div>
    </div>
)

export default Jumbotron;
