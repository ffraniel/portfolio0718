import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './index.css';

import Header from '../components/Header';
import PortfolioBlock from '../components/PortfolioBlock';
import Contact from '../components/Contact';

class Layout extends React.Component {
  constructor(props){
    super(props);
    this.scrollBGChange = this.scrollBGChange.bind(this);
  }
  componentDidMount(){
    document.addEventListener('scroll', this.scrollBGChange)
  }

  componentWillUnmount(){
    document.removeEventListener('scroll', this.scrollBGChange)
  }

  scrollBGChange(){
    var yOffset = window.pageYOffset;
    var body = document.body;
    var html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    var heightLessInnerHeight = height - window.innerHeight;
    var percentage = yOffset / heightLessInnerHeight;
    document.querySelector('.fade-bg').style.opacity = percentage;
  }

  render(){
    const data = this.props.data;
    const children = this.props.children;
    return (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Fran the Dev, Javascript and Web Developer' },
            { name:'keywords', content: 'Javascript,Francis,Whitehead,Web,Developer,Code,Websites' }
          ]}
        />
        <Header currentURL={this.props.match.path} />
        {children()}
        <div className="fade-bg" />
        <PortfolioBlock projects={data.allMarkdownRemark.edges} />
        <Contact />
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.func
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
            shortname
            popup
            link
            blurb
            mainimage {
              publicURL
              childImageSharp {
                sizes(maxWidth: 480 ) {
                  srcSet
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
