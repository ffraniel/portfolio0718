import React from 'react'
import Jumbotron from '../components/Jumbotron'
import About from '../components/About'
import PageTransition from 'gatsby-plugin-page-transitions'

const IndexPage = () => (
  <PageTransition>
    <div>
      <Jumbotron />
      <About />
    </div>
  </PageTransition>
)

export default IndexPage
