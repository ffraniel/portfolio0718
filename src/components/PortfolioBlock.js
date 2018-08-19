import React from 'react';
import Link from 'gatsby-link';
import './PortfolioBlock.css';
import Img from "gatsby-image"
// import { projects } from '../data/projects';

const PortfolioItem = (props) => (
    <div className="folio-item">
    <Link to={props.project.node.frontmatter.path}>
        <figcaption>{props.project.node.frontmatter.popup}</figcaption>
        <Img className="portfolio-image" 
            resolutions={props.project.node.frontmatter.mainimage.childImageSharp.sizes} 
             />
    </Link>
</div>
);

const PortfolioBlock = (props) => (
    <div className="portfolio-block">
            <h3 className="section-heading">Portfolio</h3>
            <section className="folio-grid">
                {props.projects.map((project)=>{
                    return(
                        <PortfolioItem project={project} key={project.node.id}/>
                    )
                })}
            </section>
    </div>
)

export default PortfolioBlock;