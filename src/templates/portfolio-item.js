import React from 'react';
import Helmet from 'react-helmet';
import './portfolio-item.css';

export default function Template({ data }) {
    const project = data.markdownRemark;
    return (
        <div className="portfolio-project-item">
            <h3 className="project-title">{project.frontmatter.title}</h3>
            <h5 className="project-subtitle">{project.frontmatter.blurb}</h5>
            <h5 className="project-link">
                <a href={project.frontmatter.link} >See project live</a>
            </h5>
            <div className="project-details" dangerouslySetInnerHTML={{ __html: project.html }} />
        </div>
    )
}

export const projectQuery = graphql`
    query projectByPath($path: String!) {
       markdownRemark(frontmatter: { path: { eq: $path } }) {
           html
           frontmatter {
               path
               title
               popup
               link
               blurb
           }
       } 
    }
`