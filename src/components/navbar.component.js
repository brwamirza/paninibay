import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import { HamburgerSpin } from 'react-animated-burgers'


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  // to make the browser scroll to top of the site when user enters this page
  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };


    // to shrink navbar when user scrolls down the page
    handleScroll(event){
      if(event.target.documentElement.scrollTop > "250"){
        this.refs.navbar.classList.remove('bg-light');
        this.refs.navbar.style.backgroundColor = "#fff";
        this.refs.logo.style.maxWidth = "110px";
      } else{
        this.refs.navbar.classList.add('bg-light');
        this.refs.navbar.style.height = "inherite";
        this.refs.logo.style.maxWidth = "140px";
      }
    }

  state = {
    isActive: false
  }

  //to show and hide nav menu
  toggleButton = () => {
    this.setState({
      isActive: !this.state.isActive
    })

    if(this.state.isActive == true){
      this.refs.mySidenav.style.transform= "translate(0)";
      this.refs.mySidenav.classList.remove('show');
      this.refs.mySidenav.classList.add('hide');      
      this.refs.target.classList.remove('show');
      this.refs.target.classList.add('hide');
    }
    else{
      this.refs.mySidenav.classList.add('show');
      this.refs.mySidenav.classList.remove('hide');
      this.refs.target.classList.add('show');
      this.refs.target.classList.remove('hide');
    }
  }

  

  render() {
    return (
      <nav className=" navbar fixed-top navbar-light bg-light navbar-expand-lg" id="navbar" ref="navbar" >
        <div className="container" >
            <Link to="/" className="navbar-brand logo"><img src="https://paninibay.com/wp-content/uploads/2017/05/panini-bay-logo.png" 
            class="relative" alt="Panini Bay" style={{top: "0px", maxWidth: "140px"}} ref="logo"/></Link>
            <div>

            {/* homburger icon */}
            <HamburgerSpin buttonStyle={{barColor: "white",outline: 'none',
             boxShadow: 'none'}} buttonWidth={30} isActive={this.state.isActive} toggleButton={this.toggleButton}/>
             {/* end of homburger icon */}

              {/* menu items */}
             <div ref="mySidenav" id="mySidenav" class="sidenav">
               <div className="container side">
                 <div className="row">
                  <div ref="target" className="d-none d-xs-none d-md-block col-md-7 col-lg-8 col-xl-8 nav-left pl-0 pr-0 target">
                    <img src="https://paninibay.com/wp-content/uploads/2017/05/menu-overlay-image.jpg"  alt=""/>
                  </div>
                  <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 nav-right pl-0 pr-0 mobile-mtx">
                      <Link to="/" className="nav-item-right" onClick={this.toggleButton}>Home</Link>
                      <a href="/#menu-section" className="nav-item-right" onClick={this.toggleButton}>Menus</a>
                      <Link to="/our-story" className="nav-item-right" onClick={this.toggleButton}>Our Story</Link>
                      <Link to="/our-chef" className="nav-item-right" onClick={this.toggleButton}>Chef Ivar Johnson</Link> 

                      {/* info part */}
                    <div className="contact-menu-list">
                      <ul className="mbs">
                        <li><span className="uppercase">PHONE:<a href="tel:609-294-4281">609-294-4281</a></span></li>
                        <li><span className="uppercase">EMAIL:<a href="mailto:paninibay@gmail.com">paninibay@gmail.com</a></span></li>
                      </ul>

                      {/* social media part */}
                      <ul className="margin0 padding0 nav-social">
                        <li className="inline-block">
                            <a href="https://www.yelp.com/waitlist/panini-bay-tuckerton/app_pitch?utm_source=panini-bay-tuckerton&utm_medium=nw_restaurant_website_widget&utm_campaign=waitlist_closed&utm_term=widget_desktop&waitlist_state=2"
                              title="Panini Bay on yelp" target="_blank">
                                <i className="fa fa-yelp" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li className="inline-block">
                            <a href="https://www.facebook.com/paninibay/" 
                                title="Panini Bay on Facebook" target="_blank">
                                <i className="fa fa-facebook-official" aria-hidden="true"></i>
                            </a>
                        </li>
                        
                        <li className="inline-block">
                          <a href="https://www.instagram.com/thenewpaninibay/" 
                                title="Panini Bay on Instagram" target="_blank">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                     </ul>

                    </div>
                  </div> 
                 </div>
               </div>
             </div>    
            </div>
        </div>   
      </nav>
    );
  }
}