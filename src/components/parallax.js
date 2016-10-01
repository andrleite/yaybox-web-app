import React from 'react';

const Parallax = () => {
  return (
    <div className="parallax-container">
      <p id="parallax-text" className="flow-text">Programe, gerencie e publique containers na nuvem.</p>
      <div className="parallax-btn"><a className="parallax-a waves-effect waves-light btn-large" href="http://yaybox.com.br:8080/register">Comece sua free trial <i className="material-icons right">cloud</i></a></div>
      <div className="parallax"><img src="img/parallax_cloud_dblue.jpg" /></div>
    </div>
  );
};

export default Parallax;