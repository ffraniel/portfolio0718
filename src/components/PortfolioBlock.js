import React from 'react';
import Link from 'gatsby-link';
import './PortfolioBlock.css';
import { projects } from '../data/projects';


const PortfolioItem = (props) => (
    <div className="folio-item">
    <Link to="/">
        <figcaption>{props.popup}</figcaption>
        <img src={props.image} alt="Front page of Eurovision 2018 quiz app." />
    </Link>
</div>
);

const PortfolioBlock = () => (
    <div className="portfolio-block">
            <h3>Portfolio</h3>
            <section className="folio-grid">
                {projects.map((project)=>{
                    return(
                        <PortfolioItem image={project.image} popup={project.popup} key={project.title} />
                    )
                })}
            </section>
    </div>
)

export default PortfolioBlock;
