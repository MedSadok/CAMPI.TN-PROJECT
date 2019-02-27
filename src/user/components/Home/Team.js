import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "./Home.css";

class Team extends React.Component{
  render()
  {
    return (
    <OwlCarousel
    className="owl-theme"
    items="3"
    loop="true"
    autoplay="true"
    autoplayTimeout="1500"
    autoplayHoverPause="true"
    id="Team"
>     
    <figure class="snip0016">
      <div className="item">
          <img src="https://powerpackelements.com/wp-content/uploads/2017/11/Team-memeber-01.png" alt="" id="team"/>
          <figcaption>
            <h2 id="h2">On vous propose des <span id="span"> services publicitaires </span> </h2>
          </figcaption>			
      </div>
     </figure>

     <figure class="snip0016">
          <div className="item">
              <img src="http://themes.dfd.name/sunday/shortcodes/wp-content/uploads/2015/03/oneman-380x340.jpg" alt="" id="team"/>
              <figcaption>
                <h2 id="h2">On vous propose des <span id="span">service en marketing</span></h2>
              </figcaption>			
          </div>
     </figure>

     <figure class="snip0016">
              <div className="item">
                  <img src="http://www.enggonary.com/wp-content/uploads/2017/12/team-member-2.jpg" alt="" id="team"/>
                  <figcaption>
                    <h2 id="h2">On vous propose des <span id="span">service logistique</span></h2>
                  </figcaption>			
              </div>
     </figure>

     <figure class="snip0016">
              <div className="item">
                  <img src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1515136552-blog-featured1.jpg" alt="" id="team"/>
                  <figcaption>
                  <h2 id="h2">On vous propose<span id="span"> une photographe profissionnelle </span> </h2>
                  </figcaption>			
              </div>
     </figure>
</OwlCarousel>
    )
  }
}

export default Team;