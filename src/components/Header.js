import React from 'react'
import Link from 'gatsby-link'
import './Header.css';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state={
      currentLocation: "home-nav"
    }    
    this.changeWindowLocation = this.changeWindowLocation.bind(this);
    this.updateHeaderLocationStyle = this.updateHeaderLocationStyle.bind(this);
    this.getInitialLocation = this.getInitialLocation.bind(this);
  }

  componentDidMount(){
    this.getInitialLocation();
  }

  getInitialLocation(){
    let locationMinusSlash = window.location.href[-1] === '/' ? window.location.href.slice(-1) : window.location.href;
    let portfolioCheck = locationMinusSlash.slice(-9) === 'portfolio';
    portfolioCheck ? 
      document.querySelector('.portfolio-nav').classList.add('underlineNav') :
      document.querySelector('.home-nav').classList.add('underlineNav');
      if(portfolioCheck) {
        this.setState({
          currentLocation: "portfolio-nav"
        })
      } 
  }

  changeWindowLocation(newLocation){
    this.setState({
      currentLocation: newLocation
    })
    this.updateHeaderLocationStyle(newLocation);
  }

  updateHeaderLocationStyle(newLocation){
    document.querySelector('.home-nav').classList.remove('underlineNav');
    document.querySelector('.portfolio-nav').classList.remove('underlineNav');
    document.querySelector('.github-nav').classList.remove('underlineNav');
    document.querySelector('.linkedin-nav').classList.remove('underlineNav');

    if (newLocation === 'home-nav') {
      document.querySelector('.home-nav').classList.add('underlineNav');
    }
    if (newLocation === 'portfolio-nav') {
      document.querySelector('.portfolio-nav').classList.add('underlineNav');
    }
    if (newLocation === 'github-nav') {
      document.querySelector('.github-nav').classList.add('underlineNav');
    }
    if (newLocation === 'linkedin-nav') {
      document.querySelector('.linkedin-nav').classList.add('underlineNav');
    }
  }

  render(){
    return (
      <header>
        <nav>
          <Link className="home-nav" onClick={()=>{this.changeWindowLocation("home-nav")}} to="/">Home</Link>
          <Link className="portfolio-nav" onClick={()=>{this.changeWindowLocation("portfolio-nav")}} to="/portfolio/">Portfolio</Link>
          <a className="github-nav" onClick={()=>{this.changeWindowLocation("github-nav")}} href="https://github.com/ffraniel/">Github</a>
          <a className="linkedin-nav" onClick={()=>{this.changeWindowLocation("linkedin-nav")}} href="https://www.linkedin.com/in/francis-whitehead-394023155/">LinkedIn</a>
        </nav>
      </header>
    )
  }
}


export default Header;