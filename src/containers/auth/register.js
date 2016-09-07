import React, {Component} from 'react';
import { Link } from 'react-router';

class Register extends Component {
  render() {
    return (
      <div className="container register">
          <div className="row">
            <div className="col m6">
              <div className="card darken-1">
                <div className="card-content">
                  <span className="card-title">YAYBOX</span>
                  <p>Crie sua conta gratuita!</p>
                    <form>
                      <div className="input-field">
                        <label htmlFor="email" type="text">Email</label>
                        <input id="email" type="text" />
                      </div>
                      <div className="input-field">
                        <label htmlFor="password" type="password">Password</label>
                        <input id="password" type="text" />
                      </div>              
                      <button className="btn btn-signup">CRIAR CONTA</button>
                      <p>ou registre-se via</p>
                      <button className="facebook-sign-in btn">FACEBOOK</button>                      
                      <button className="github-sign-in btn">GITHUB</button>
                      <div>
                      <small className="terms">
                        Ao clicar acima, você está concordando com os
                        <Link target="_blank" to="/"> Termo de serviço</Link>
                      </small>
                      </div>                    
                    </form>
                </div>              
              </div>
              <Link to="/login"><button className="btn btn-signin">ENTRAR</button></Link>
            </div>
        </div>
      </div>
    );
  }
}

export default Register