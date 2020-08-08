import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';


export default class Footer extends Component {


  render() {
    return (
      <div>
          <footer className="site-footer">

              {/* social media part */}
              <div className="container">
                <div className="block center-item mvs">
                    <ul className="margin0 padding0 center-text">
                      <li className="inline-block">
                          <a href="https://www.yelp.com/waitlist/panini-bay-tuckerton/app_pitch?utm_source=panini-bay-tuckerton&utm_medium=nw_restaurant_website_widget&utm_campaign=waitlist_closed&utm_term=widget_desktop&waitlist_state=2"
                             title="Panini Bay on yelp" target="_blank">
                              <i className="fa fa-yelp" aria-hidden="true"></i>
                          </a>
                      </li>
                      <li className="inline-block paddin0_15">
                          <a href="https://www.facebook.com/paninibay/" 
                              title="Panini Bay on Facebook" target="_blank">
                              <i className="fa fa-facebook-official" aria-hidden="true"></i>
                          </a>
                      </li>
                      
                      <li className="inline-block paddin0_15">
                         <a href="https://www.instagram.com/thenewpaninibay/" 
                              title="Panini Bay on Instagram" target="_blank">
                              <i className="fa fa-instagram" aria-hidden="true"></i>
                         </a>
                      </li>
                    </ul>

                </div>

                {/* paninibay icon */}
                <a class="block center-item center-text footer-logo" href="/" title="Panini Bay">
                  <img src="https://paninibay.com/wp-content/uploads/2017/05/panini-bay-logo.png" alt="Panini Bay"/>
                </a>
              </div>

          </footer>
      </div>
    );
  }
}