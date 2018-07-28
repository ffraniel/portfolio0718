import React from 'react'
import './About.css';

const About = () => (
    <section className="introduction" >
        <article>
            <p>I am a full-stack Javascript developer (ES6) using <span>Node.js</span>,
            <span>React.js</span>,
            <span>Next.js</span>,
            <span>Git</span> and
            <span>NPM</span>. I have experience of both using
            <span>RESTful APIs</span> (Spotify, Musixmatch, Github, Twitter) and creating them. I have experience working with
            <span>Heroku</span>,
            <span>MongoDB</span> and
            <span>CMSs</span> (such as Prismic.io).</p>
            <h3>Fantastic user experiences</h3>
            <p>I love to develop beautiful responsive websites and use exciting technology but the bottom line is how effective it is at satisfying the users. I can help keep that focus in mind at all times.</p>
        </article>
        <div className="fullImage">
            <img src="./component-images/upworkImage.jpg" alt="Fran Whitehead smiling at the camera slightly goofily." />>
        </div>
    </section>
)

export default About;
