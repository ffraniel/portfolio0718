import React from 'react'
import Link from 'gatsby-link'
import './portfolio-item.css'
import Titles from '../components/Titles.js'
import ProjectInformation from '../components/ProjectInformation'

import PortfolioBlock from '../components/PortfolioBlock'

const PortfolioItem = () => (
  <div className="portfolio-item">
    <main>
      <Titles />
      <ProjectInformation />
    </main>
    <p className="downArrow">&#8681;</p>
    <PortfolioBlock />
  </div>
)

// const query = graphyql`
//     query portfolioExample {

//     }
// `

export default PortfolioItem
