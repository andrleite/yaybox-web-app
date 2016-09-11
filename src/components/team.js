import React from 'react';

const Team = () => {
  return (
    <div className="section scrollspy" id="team">
      <div className="container">
        <h2 className="header text_b">Nosso Time </h2>
        <div className="row">

        <div className="col s12 m3">
        </div>

            <div className="col s12 m3">
                <div className="card card-avatar">
                    <div className="waves-effect waves-block waves-light">
                        <img className="activator" src="img/avatar3.png" />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">André Leite <br/>
                            <small><em><a className="red-text text-darken-1" href="#">CEO/CTO/Developer</a></em></small></span>
                        <p>
                            <a className="blue-text text-lighten-2" href="https://www.facebook.com/joash.c.pereira">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a className="blue-text text-lighten-2" href="https://twitter.com/im_joash">
                                <i className="fa fa-twitter-square"></i>
                            </a>
                            <a className="blue-text text-lighten-2" href="https://plus.google.com/u/0/+JoashPereira">
                                <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a className="blue-text text-lighten-2" href="https://www.linkedin.com/in/joashp">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="col s12 m3">
                <div className="card card-avatar">
                    <div className="waves-effect waves-block waves-light">
                        <img className="activator" src="img/avatar2.png" />
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">Bianca Borges <br/>
                            <small><em><a className="red-text text-darken-1" href="#">CFO/CMO</a></em></small></span>
                        <p>
                            <a className="blue-text text-lighten-2" href="https://www.facebook.com/joash.c.pereira">
                                <i className="fa fa-facebook-square"></i>
                            </a>
                            <a className="blue-text text-lighten-2" href="https://twitter.com/im_joash">
                                <i className="fa fa-twitter-square"></i>
                            </a>
                            <a className="blue-text text-lighten-2" href="https://plus.google.com/u/0/+JoashPereira">
                                <i className="fa fa-google-plus-square"></i>
                            </a>
                            <a className="blue-text text-lighten-2" href="https://www.linkedin.com/in/joashp">
                                <i className="fa fa-linkedin-square"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default Team;