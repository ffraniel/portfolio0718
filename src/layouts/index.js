import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css';

import Header from '../components/Header';

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
