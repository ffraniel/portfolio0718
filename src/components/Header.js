import React from 'react'
import Link from 'gatsby-link'
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <Link className="home-nav" href="#">Home</Link>
      <Link className="portfolio-nav" href="#">Portfolio</Link>
      <a className="github-nav" href="https://github.com/ffraniel/">Github</a>
      <a className="linkedin-nav" href="https://www.linkedin.com/in/francis-whitehead-394023155/">LinkedIn</a>
    </nav>
  </header>
)

export default Header;
