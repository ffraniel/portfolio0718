import React from 'react'
import Link from 'gatsby-link';
import './portfolio.css';

const Portfolio = () => (
  <div className="portfolio-block">
  <main className="portfolio-item">
        <h3>Saiddit BE: Back End for Reddit Clone</h3>
        <h5>
            <span>RESTful API</span> using 
            <span>MongoDB</span> and 
            <span>Express.js</span> tested with 
            <span>Mocha</span> and 
            <span>Chai</span>
        </h5>
        <h3 className="center-link">
            <a href="https://vast-tundra-92428.herokuapp.com/">Visit Saiddit BE</a>
        </h3>
        <img className="portfolio-image" src="images/saidditBEWebLargeTop.jpg" alt="" />
        <p>A RESTful back-end with all the end-points necessary to feed whatever framework (or none) one may choose for the
            front-end. With endpoints for articles, articles filtered by subject, comments, voting on articles, voting on
            comments and user profiles.</p>
        <img className="portfolio-image" src="images/saidditBEMiddle.jpg" alt="" />
        <p>I used Node.js with Express.js and MongoDB. This is part of a larger full-stack project wherein I used React.js for
            the front-end. </p>
        <img className="portfolio-image" src="images/saidditBEsall.jpg" alt="" />
        <p>All the endpoints are fully tested using Mocha and Chai. The database is hosted on mLab.com. The project is currently
            hosted on Heroku.</p>
    </main>
    <p className="downArrow">&#8681;</p>
    <footer id="portfolio" className="portfolio-preview">
        <h3 className="title">Other portfolio items</h3>
        <section className="folio-grid">

            <div className="folio-item">
                <a href="portfolioEurovisionLyrics.html">
                    <figcaption>Eurovision Lyrics Quiz using React.</figcaption>
                    <img src="images/eurovisionWrongAnswer.jpg" alt="Image of Eurovision React quiz in action - getting the question wrong." />
                </a>
            </div>

            <div className="folio-item">
                <a href="portfolioSaidditFE.html">
                    <figcaption>Front end of a Reddit Clone using React.</figcaption>
                    <img src="images/saidditFull.jpg" alt="Front end of Reddit Clone using React" />
                </a>
            </div>

            <div className="folio-item">
                <a href="portfolioSans.html">
                    <figcaption>Band website using HTML, CSS and vanilla JS.</figcaption>
                    <img src="images/sanssouciFull.jpg" alt="Band website using HTML, CSS and vanilla JS" />
                </a>
            </div>

            <div className="folio-item">
                <a href="portfolioSaidditBE.html">
                    <figcaption>Back-end of a Reddit Clone RESTful API using NodeJS, Express and MongoDB.</figcaption>
                    <img src="images/beItFull.jpg" alt="Back end of Reddit Clone RESTful API using NodeJS, Express and MongoDB" />
                </a>
            </div>

            <div className="folio-item">
                <a href="portfolioWikipediaSearch.html">
                    <figcaption>Search Wikipedia with instant feedback using React</figcaption>
                    <img src="images/wikiSearchFull.jpg" alt="Front page of wiki search app" />
                </a>
            </div>

            <div className="folio-item">
                <a href="portfolioWorldCupEngland.html">
                    <figcaption>Are England are still in the World Cup, using Google Firebase Serverless Functions</figcaption>
                    <img src="images/EIWCFull.jpg" alt="Front page of the website." />
                </a>
            </div>

        </section>
    </footer>
    </div>
)

export default Portfolio;
