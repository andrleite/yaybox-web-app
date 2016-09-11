import React from 'react';

const Intro = () => {
  return (
    <div id="intro" className="section scrollspy">
      <div className="container">
        <div className="row">
          <div  className="col s12">
              <h2 className="center header text_h2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className="span_h2"> Phasellus  </span>vestibulum lorem risus, nec suscipit lorem <span className="span_h2"> laoreet quis.</span> </h2>
          </div>

          <div  className="col s12 m4 l4">
            <div className="center promo promo-example">
              <i className="mdi-image-flash-on"></i>
              <h5 className="promo-caption">Speeds up development</h5>
              <p className="light center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
            </div>
        </div>
        <div className="col s12 m4 l4">
            <div className="center promo promo-example">
              <i className="mdi-social-group"></i>
              <h5 className="promo-caption">User Experience Focused</h5>
              <p className="light center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
        </div>
        <div className="col s12 m4 l4">
            <div className="center promo promo-example">
              <i className="mdi-hardware-desktop-windows"></i>
              <h5 className="promo-caption">Fully responsive</h5>
              <p className="light center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Intro;