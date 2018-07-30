import React from 'react';
import Link from 'gatsby-link';
import './PortfolioBlock.css';
import eurovisionImg from './component-images/eurovisionFrontPage.jpg';
import beRedditImg from './component-images/beItFull.jpg';
import feRedditImg from './component-images/saidditFull.jpg';
import sanssouciImg from './component-images/sanssouciFull.jpg';
import wikiImg from './component-images/wikiSearchFull.jpg';
import worldcupImg from './component-images/EIWCFull.jpg';

const PortfolioItem = (props) => (
    <div className="folio-item">
    <Link to="/">
        <figcaption>Eurovision Lyrics Quiz using React.</figcaption>
        <img src={eurovisionImg} alt="Front page of Eurovision 2018 quiz app." />
    </Link>
</div>
);

const PortfolioBlock = () => (
    <div className="portfolio-block">
            <h3>Portfolio</h3>

            <section className="folio-grid">
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
                <PortfolioItem />
            
                {/* <div className="folio-item">
                    <a href="portfolio/portfolioEurovisionLyrics.html">
                        <figcaption>Eurovision Lyrics Quiz using React.</figcaption>
                        <img src="images/eurovisionFrontPage.jpg" alt="Front page of Eurovision 2018 quiz app." />
                    </a>
                </div>

                <div className="folio-item">
                    <a href="portfolio/portfolioSaidditBE.html">
                        <figcaption>Back-end of a Reddit Clone RESTful API using NodeJS, Express and MongoDB.</figcaption>
                        <img src="images/beItFull.jpg" alt="Back end of Reddit Clone RESTful API using NodeJS, Express and MongoDB" />
                    </a>
                </div>

                <div className="folio-item">
                    <a href="portfolio/portfolioSaidditFE.html">
                        <figcaption>Front end of a Reddit Clone using React.</figcaption>
                        <img src="images/saidditFull.jpg" alt="Front end of Reddit Clone using React" />
                    </a>
                </div>

                <div className="folio-item">
                    <a href="portfolio/portfolioSans.html">
                        <figcaption>Band website using HTML, CSS and vanilla JS.</figcaption>
                        <img src="images/sanssouciFull.jpg" alt="Band website using HTML, CSS and vanilla JS" />
                    </a>
                </div>


                <div className="folio-item">
                    <a href="portfolio/portfolioWikipediaSearch.html">
                        <figcaption>Search Wikipedia with instant feedback using React</figcaption>
                        <img src="images/wikiSearchFull.jpg" alt="Front page of wiki search app" />
                    </a>
                </div>

                <div className="folio-item">
                    <a href="portfolio/portfolioWorldCupEngland.html">
                        <figcaption>Are England are still in the World Cup, using Google Firebase Serverless Functions.</figcaption>
                        <img src="images/EIWCFull.jpg" alt="Front page of site showing if England are still in the WC2018" />
                    </a>
                </div> */}
            </section>
    </div>
)

export default PortfolioBlock;
