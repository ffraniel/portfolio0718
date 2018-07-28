import React from 'react'
import Link from 'gatsby-link'
import './header.css';

const Header = ({ siteTitle }) => (
  <header>
    <nav>
      <a className="home-nav" href="#">Home</a>
      <a className="portfolio-nav" href="#">Portfolio</a>
      <a className="github-nav" href="https://github.com/ffraniel/">Github</a>
      <a className="linkedin-nav" href="https://www.linkedin.com/in/francis-whitehead-394023155/">LinkedIn</a>
    </nav>
  </header>
)

export default Header
