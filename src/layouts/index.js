import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css';

import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import About from '../components/About';
import PortfolioBlock from '../components/PortfolioBlock';
import Contact from '../components/Contact';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Fran the Dev, Javascript and Web Developer' },
        { name:'keywords', content: 'Javascript,Francis,Whitehead,Web,Developer,Code,Websites' }
      ]}
    />
    <Header />
    <Jumbotron />
    <About />
    <PortfolioBlock />
    <Contact />

    {children}

  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
