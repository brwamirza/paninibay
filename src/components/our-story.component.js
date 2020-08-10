import React, { Component } from 'react';
import '../css/our-story.css';
import Fade from 'react-reveal/Fade';


export default class OurStory extends Component {

    componentDidMount(){
    window.scrollTo(0, 0);
    }

  render() {
    return (
        <div>
            <article className="mtm hentry " id="our-chef">
                <div className="entry-content">

                    {/* our-story-1 */}
                    <section className="container margin-top-large">
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 mobile-mbl">
                            <img src="https://paninibay.com/wp-content/uploads/2017/05/our-story-wine.jpg" alt="wine bottle"/>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <div className="row full-height">
                                    <div className="d-none d-sm-block col-sm-6 offset-md-1 grayBox-2 grayCol mt-5">

                                    </div>
                                    <div className=" col-sx-12 col-sm-12 offset-sm-1 col-md-10 offset-lg-2 col-lg-9 pull-up-2" style={{padding: "0"}}>
                                        <h1 class="mv0">OUR STORY</h1>
                                        <h3 class="capitalize mt0 mbm h4-size"><em>A Family Dream Come True</em></h3>
                                        <p>
                                            Panini Bay is the product of our family’s love for food, friends, and the beauty of the bay.
                                        </p>
                                        <p>
                                            We pride ourselves in combining fresh Italian cuisine, a breathtaking view of the 
                                            Barnegat Bay, and impeccable service to give you a world-class culinary experience.
                                        </p>
                                        <div class="scrollDown relative">
                                            <a href="#our-story-2">
                                             <div class="block"><small><em>scroll down</em></small></div>
					                	                 <div class="block"><span class="chevron bottom"></span></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* our-story-2 */}
                    <section className="margin-top-medium mobile-mbl container " id="our-story-2">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 offset-sm-0 col-md-5 align-self-center">
                                <div className="absoluteValign">
                                <h2 className="mb-4">
                                    New Life After The Storm
                                </h2>
                                <p class="mb0">
                                     Our family opened Panini Bay in the summer of 2011, just months 
                                     before the devastation of Hurricane Sandy. The old building was nearly destroyed,
                                      but we turned our loss into an opportunity to create an atmosphere that perfectly 
                                      embodies our love for food, friends, and family.
                                </p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6 offset-sm-1 mobile-mtl">
		                	    <img src="https://paninibay.com/wp-content/uploads/2017/05/inside-panini-bay.jpg" alt="Inside panini bay"/>
		                    </div>
                        </div>
                    </section>

                    {/* our-story-3 */}
                    <section className="container mobile-mbl our-story-3 margin-top-medium">
                        <div className="reading-box center-item mbs center-text">
                          {/*fade animation */}
                           <Fade bottom>  
                              <h2 class="mv0">ENJOY A VIEW</h2>
                              <h3 class="mt0 mbm capitalize">Unlike Any Other</h3>
                              <div class="left-text padding0_60">
                                <p className="mt-5">
                                    We chose Panini Bay’s location because of its panoramic view of the Barnegat Bay.
                                    Breathtaking sunsets fill our dining room with light and color, creating 
                                    a view unmatched by any other restaurant in the area.
                                </p>
                                <p>
                                    Whether you are looking for a causal, fun lunch with friends or an 
                                    intimate sunset dinner, Panini Bay is the answer.
                                </p>
                              </div>
                            </Fade>
                        </div>
                    </section>

                     {/* image slider section */}
                    <section className=" margin-top-medium">
                      <div id="ourStoryCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
                        <ol className="carousel-indicators">
                          <li data-target="#ourStoryCarousel" data-slide-to="0" class="active"></li>
                          <li data-target="#ourStoryCarousel" data-slide-to="1"></li>
                          <li data-target="#ourStoryCarousel" data-slide-to="2"></li>
                          <li data-target="#ourStoryCarousel" data-slide-to="3"></li>
                          <li data-target="#ourStoryCarousel" data-slide-to="4"></li>
                        </ol>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img className="d-block w-100" src="https://paninibay.com/wp-content/uploads/2017/05/interior-slide-16-9.jpg" alt="interior slide slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="https://paninibay.com/wp-content/uploads/2017/05/fish-slide.jpg" alt="Fish slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="https://paninibay.com/wp-content/uploads/2017/05/peppers-slide.jpg" alt="peppers slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="https://paninibay.com/wp-content/uploads/2017/05/artichoke-slide.jpg" alt="artichoke slide"/>
                          </div>
                          <div className="carousel-item">
                            <img className="d-block w-100" src="https://paninibay.com/wp-content/uploads/2017/05/veal-milanese-close-slide.jpg" alt="veal milanese close slide"/>
                          </div>
                        </div>
                          <a class="carousel-control-prev" href="#ourStoryCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon " aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#ourStoryCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
                      </div>
                    </section>

                    <section className="mobile-mtl container margin-top-medium margin-bottom-medium">
                         <div className="row">
                             <div className="col-xs-12 col-sm-5 offset-lg-1 order-sm-7 col-md-6 col-lg-5 order-md-8 align-self-center">
                                 <h2 className="mb-5">Come by Land or Sea</h2>
                                <p>
                                   Our waterfront location allows diners to navigate to the restaurant by boat.
                                </p>
                                <p class="mb0">
                                     With large dock access, we welcome boats to tie off and enjoy our food and atmosphere.
                                </p>
                             </div>

                             <div className="col-xs-12 col-sm-7 col-md-6 mobile-mtl">
                                <img src="https://paninibay.com/wp-content/uploads/2017/05/boating.jpg" alt="boat"/>
                             </div>
                         </div>
                     </section>
                </div>
            </article>
        </div>
    );
  }
}