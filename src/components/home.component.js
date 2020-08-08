import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/home.css';
import "animate.css/animate.min.css";
import Fade from 'react-reveal/Fade';

export default class Home extends Component {

  componentDidMount(){
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        {/* home section */}
        <section className="container-fluid" id="home-1">
         <div className="row row1">
          <div className="col-xl-7 d-none d-lg-block d-xl-block col-lg-7">
            <img src="https://paninibay.com/wp-content/uploads/2017/05/clam-pasta-main.png" className="image" alt="Delicious Italian Cuisine"/>
          </div>
          <div className="col-xl-5 col-sm-12 column-2 col-lg-5">
            <h3 className="showcase-text-1">delicious</h3>
            <h1 className="mt-2 mb-2 header-1 letter-spacing">ITALIAN CUISINE</h1>
            <h3 className="showcase-text-2">on the bay</h3>
            <img src="https://paninibay.com/wp-content/uploads/2017/05/flourish.png" alt="" className="image2"/>
            <span class="block letter-spacing">Welcome to Panini Bay</span>
          </div>
          </div>
          <div id="mobilePlate" class="d-block d-lg-none">
					<img src="https://paninibay.com/wp-content/uploads/2017/05/clam-pasta-main.png" className="image-mobile" alt="Delicious Italian Cuisine"/>
			  	</div>
        </section> 

        {/* menu section */}
          <section className="container menu-section" >
            <div className="mtxl mbl padding0_60 opacity-transform reading-box">
            <Fade bottom>
              <p className="larger mv0 center-text">
                Enjoy our exquisite Italian cuisine while experiencing a 
                breathtaking sunset over the Barnegat Bay. We take pride in our exceptional service,
                world-class views, and fresh and local fare prepared by our chef and owner.
              </p>
              </Fade>
            </div>
            <img src="https://paninibay.com/wp-content/uploads/2017/05/flourish.png" alt="" className="fadeIn mbl center-item block image3"  id="menu-section"/>
            <div className="center-item">
              <h2 className="fadeIn center-text mv0 opacity-transform">FRESH & LOCAL</h2>
              <h3 className="center-text mtxs mbm fadeIn opacity-transform">explore our menus</h3>
              <div className="center-text fadeIn opacity-transform">
                <p>Curbside takeout and local delivery (within 08087)</p>
                <p>Delivery for debit/credit card purchases only</p>
                <p>Cash allowed on curbside pickup, but no change available</p>
              </div>

              <div className="row" >
                <div className="padding0_30 col-xs-12 col-lg-4 opacity-transform column-2"> 
                  <a href="https://paninibay.com/wp-content/uploads/2020/06/PB-Takeout-Menu-3.pdf" className="menu-button">
                    <span class="headerFont">Takeout</span>
                    menus
                  </a>
                </div>
                <div className="padding0_30 col-xs-12 col-lg-4 opacity-transform column-2">
                  <a href="https://paninibay.com/wp-content/uploads/2020/05/PB-Takeout-Wine-kids-Menu_2.pdf" className="menu-button">
                    <span class="headerFont">WINE & KIDS</span>
                    menus
                  </a>
                </div>
                <div className="padding0_30 col-xs-12 col-lg-4 opacity-transform column-2">
                  <a href="https://paninibay.com/wp-content/uploads/2020/06/PB-Takeout-Menu-3.pdf" className="menu-button">
                    <span class="headerFont">CATERING</span>
                    menus
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* image slider section */}
          <section className="mvl">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://paninibay.com/wp-content/uploads/2017/05/fish-slide.jpg" alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://paninibay.com/wp-content/uploads/2017/05/interior-slide-16-9.jpg" alt="Third slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://paninibay.com/wp-content/uploads/2017/05/peppers-slide.jpg" alt="fourth slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://paninibay.com/wp-content/uploads/2017/05/artichoke-slide.jpg" alt="fifth slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://paninibay.com/wp-content/uploads/2017/05/veal-milanese-close-slide.jpg" alt="sixth slide"/>
                </div>
              </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
            </div>
          </section>

          {/* home about section */}
          <section className="container mvl">
            <div className="row home-about ">
              <div className="col-xs-12 col-sm-6 mobile-mbs">
                <div className="grayBox ml50p mtm"></div>
                <h3 className="center-text scrollV about-section-header ">Chef & Owner <br/> Ivar Johnson</h3>
                <div className="ml50p">
                <p className="mv0">Dedicated to the culinary philosophy of “keep it fresh, keep it local”, 
                  Chef Ivar Johnson has created his own unique approach to modern Italian cuisine at the shore.</p>
                <Link to="/our-chef" title="read more" className="block">
                  <small>Read More</small>
                </Link>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 mobile-mtl">
                <img src="https://paninibay.com/wp-content/uploads/2017/05/chef-home.jpg"  alt=""/>
              </div>
            </div>
          </section>

          {/* home info section */}
          <section className="container mtxl home-info">

            <div className="row margin-b-30">

              <div className="d-none d-xs-none d-sm-block col-sm-7 mbs ">
                <img src="https://paninibay.com/wp-content/uploads/2017/05/bay-sunset-1.jpg" alt="Visit Panini Bay"/>
              </div>

              <div className="col-xs-12 col-sm-5 col-md-4  offset-md-1 left-text">
               <h2 className="mv0 mobile-center">Visit Panini Bay</h2>
               <span className="block h3-size mbs mobile-center italic-text">by land <small style={{fontSize: "18px"}}>or</small> by sea</span>
               <span className="block h4-size mobile-center">101 Parker Road<br/>Tuckerton, NJ 08087</span>
               <hr className="hr-30 mvs desk-left"></hr>
               <span className="block h4-size mobile-center">39° 34.840' N<br/>74° 20.054' W</span>
               <hr className="hr-30 mvs desk-left"></hr>
               <span className="block h4-size pointer mobile-center" ><a href="tel:609-294-4281" style={{color: "#404040"}}>609-294-4281</a></span>
               <span className="block h4-size pointer mobile-center"><a href="mailto:paninibay@gmail.com" style={{color: "#404040"}}>paninibay@gmail.com</a></span>
               <span className="block mts mobile-center">Hours:</span>
               <span className="block mobile-center small">Monday 4pm - 8pm</span>
               <span className="block mobile-center small">Tuesday Closed</span>
               <span className="block mobile-center small">Wednesday 4pm - 8pm</span>
               <span className="block mobile-center small">Thursday 12pm - 8pm</span>
               <span className="block mobile-center small">Friday 12pm - 9pm</span>
               <span className="block mobile-center small">Saturday 12pm - 9pm</span>
               <span className="block mobile-center small">Sunday 12pm - 8pm</span>
               <span className="block mobile-center small">Private parties are welcome during off-season</span>
              </div>

            </div>

            <div className="center-text mx-auto mvl yelp-section">
             <h2 className="mvs mobile-center">CHECK WAIT TIMES &amp; GET IN LINE</h2>
             <iframe src="https://www.yelp.com/waitlist/panini-bay-tuckerton/widget" frameborder="0" width="250" height="326"></iframe>
            </div>

          </section>

      </div>
    );
  }
}