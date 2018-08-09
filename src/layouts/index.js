import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css';

import Header from '../components/Header';
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
    {children()}
    <PortfolioBlock />
    <Contact />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query PageDataAndPortfolio {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            popup
            link
          }
          excerpt
        }
      }
    }
  }
`
