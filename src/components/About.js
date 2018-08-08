import React from 'react'
import './About.css';
import fransPic from '../images/component-images/upworkImage.jpg';

const About = () => (
    <section className="introduction" >


        <article>
            <p>I am a full-stack Javascript developer (ES6) using <span>Node.js</span>, <span>React.js</span>, <span>Next.js</span>, <span>Express.js</span>, <span>MongoDB</span>, <span>Gatsby.js</span>, <span>Git</span>, <span>Gulp</span> and <span>NPM</span>. I have experience of both using <span>RESTful APIs</span> (Spotify, Musixmatch, Github, Twitter) and creating them. I have experience working with <span>Heroku</span>, <span>Firebase</span> and <span>CMS</span> such as <span>Prismic.io</span> and, of course, <span>Wordpress</span>.</p> 
            <h3>Fantastic user experiences</h3>
            <p>Whilst I love to develop beautiful responsive websites and use exciting technology the bottom line is how effective it is at satisfying the users. I can help keep that focus in mind at all times.</p>
        </article>
        <div className="fullImage">
            <img src={fransPic} alt="Fran Whitehead smiling at the camera slightly goofily." />
        </div>
        <p className="downArrow">&#8681;</p>
    </section>
)

export default About;
