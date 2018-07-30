import React from 'react'
import Link from 'gatsby-link';
import './portfolio.css';

import Titles from '../components/Titles.js';
import ProjectInformation from '../components/ProjectInformation';
import PortfolioBlock from '../components/PortfolioBlock';
const example = true;

const Portfolio = () => (
<div className="portfolio-block">
    {example &&
    <div>
    <main className="portfolio-item">
        <Titles />
        <ProjectInformation />
    </main>

    <p className="downArrow">&#8681;</p>
    </div>
    }
    
    <PortfolioBlock />
    </div>
)

// const query = graphyql`
//     query portfolioExample {

//     }
// `

export default Portfolio;
