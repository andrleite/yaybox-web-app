import React from 'react';

const Pricing = () => {
  return (
    <div className="section scrollspy" id="work">
      <div className="container">
        <h2 className="header text_b">Work </h2>
        <div className="row">
          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="img/project1.jpg" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Project Title 1
                <i className="mdi-navigation-more-vert right"></i></span>
                <p><a href="#">Project Link</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
                <p>Here is some more information about this project that is only revealed once clicked on.</p>
              </div>
            </div> {/* div card */}

          </div> {/* div col s12 */}
          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="img/project2.jpeg" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Project Title 1
                <i className="mdi-navigation-more-vert right"></i></span>
                <p><a href="#">Project Link</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
                <p>Here is some more information about this project that is only revealed once clicked on.</p>
              </div>
            </div> {/* div card */}
          </div> {/* div col s12 */}
          
          <div className="col s12 m4 l4">
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="img/project5.png" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Project Title 1
                <i className="mdi-navigation-more-vert right"></i></span>
                <p><a href="#">Project Link</a></p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
                <p>Here is some more information about this project that is only revealed once clicked on.</p>
              </div>
            </div> {/* div card */}
          </div> {/* div col s12 */}

        </div>  {/* div row */}
      </div>  {/* div container */}
    </div>
  );
};

export default Pricing;