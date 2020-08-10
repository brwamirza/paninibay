import React, { Component } from 'react';
import '../css/our-chef.css';


export default class OurChef extends Component {

    componentDidMount(){
    window.scrollTo(0, 0);
    }

  render() {
    return (
        <div>
            <article className="mtm hentry " id="our-chef">
                <div className="entry-content">

                    {/* our-chef-1 */}
                    <section className="container margin-top-large">
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 mobile-mbl">
                            <img src="https://paninibay.com/wp-content/uploads/2017/05/pasta-making.jpg" alt="Chef Ivar Johnson"/>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <div className="row full-height">
                                    <div className="d-none d-sm-block col-sm-6 offset-md-1 grayBox-3 grayCol graybox-mtm">

                                    </div>
                                    <div className=" col-sx-12 col-sm-11 offset-sm-1 col-md-10 offset-md-2 col-lg-9 pull-up-3" style={{padding: "0"}}>
                                        <h1 class="mv0">OUR CHEF</h1>
                                        <h3 class="capitalize mt0 mbm h4-size"><em>Meet Ivar Johnson</em></h3>
                                        <p>
                                            Dedicated to the culinary philosophy of “keep it fresh, keep it local”, 
                                            Chef Ivar Johnson has created his own unique approach to modern Italian cuisine at the shore.
                                        </p>
                                        <div class="scrollDown relative">
                                            <a href="#our-chef-2">
                                             <div class="block"><small><em>scroll down</em></small></div>
					                	     <div class="block"><span class="chevron bottom"></span></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* our-chef-2 */}
                    <section className="margin-top-medium mobile-mbl container " id="our-chef-2">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 offset-sm-0 col-md-5 align-self-center">
                                <div className="absoluteValign">
                                <p>
                                    Chef and owner Ivar Johnson graduated as valedictorian of The Restaurant School 
                                    of Walnut Hill College, Philadelphia PA.
                                </p>
                                <p class="mb0">
                                    Chef Ivar has done apprenticeships at The Peking Duck House, NYC, 
                                    Blackfish Restaurant in Conshohocken, PA, and Cafe Colore in Freehold, NJ. 
                                    He has also cooked at Bistro14, LBI, and Local Smokehouse BBQ in Cookstown, NJ.
                                </p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 offset-sm-1 mobile-mtl">
		                	    <img src="https://paninibay.com/wp-content/uploads/2017/05/fire-cooking.jpg" alt="Chef Ivar"/>
		                    </div>
                        </div>
                    </section>

                     {/* our-chef-3 */}
                     <section className="margin-top-medium margin-bottom-medium mobile-mtl container">
                         <div className="row">
                             <div className="col-xs-12 col-sm-5 order-sm-7 col-md-6 order-md-8 align-self-center">
                                <p>
                                    Chef Ivar showcases his culinary expertise and creativity with every dish. 
                                    Whether you are a seafood lover, steak lover, or a vegetarian, there is something 
                                    for you at Panini Bay.
                                </p>
                                <p class="mb0">
                                    His creativity shines through in our daily specials that are crafted to use fresh,
                                     hand-picked ingredients depending on the season and availability.
                                </p>
                             </div>

                             <div className="col-xs-12 col-sm-7 col-md-6 mobile-mtl">
                                <img src="https://paninibay.com/wp-content/uploads/2017/05/chopping-parsley.jpg" alt="Chopping"/>
                             </div>
                         </div>
                     </section>

                </div>
            </article>
        </div>
    );
  }
}