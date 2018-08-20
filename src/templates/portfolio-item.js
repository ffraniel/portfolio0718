import React from 'react';
import './portfolio-item.css';
import Subtitle from '../components/Subtitle.js';
import PageTransition from 'gatsby-plugin-page-transitions';

export default function Template({ data }) {
    const project = data.markdownRemark;
    return (
        <PageTransition>
            <div className="portfolio-project-item">
                <h3 className="project-title">{project.frontmatter.title}</h3>
                <Subtitle blurb={project.frontmatter.blurb} />
                <h5 className="project-link">
                    <a href={project.frontmatter.link} >Visit {project.frontmatter.shortname}</a>
                </h5>
                <div className="project-details" dangerouslySetInnerHTML={{ __html: project.html }} />
            </div>
        </PageTransition>
    )
}

export const projectQuery = graphql`
    query projectByPath($path: String!) {
       markdownRemark(frontmatter: { path: { eq: $path } }) {
           html
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
       } 
    }
`