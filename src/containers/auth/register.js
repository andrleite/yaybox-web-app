import React, {Component} from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import * as actions from '../../actions';

class Register extends Component {
    handleFormSubmit(formProps) {
      // Call action creator to sign up the user!
      this.props.signupUser(formProps);
  }

  renderAlert(){
    if (this.props.errorMessage){
      return (
        <div className="alert-login">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      <div className="container register">
          <div className="row">
            <div className="col m6">
              <div className="card darken-1">
                <div className="card-content">
                  <span className="card-title">YAYBOX</span>
                  <p>Crie sua conta gratuita!</p>
                    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                      <div className="input-field">
                        <label htmlFor="email" type="text">Email</label>
                        <input id="email" type="text" {...email} />
                      </div>
                      <div className="input-field">
                        <label htmlFor="password" type="password">Password</label>
                        <input id="password" type="password" {...password} />
                      </div>
                      {this.renderAlert()}              
                      <button action="submit" className="btn btn-signup">CRIAR CONTA</button>
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

function mapStateToProps(state) {
  return { errorMessage: state.login.error};
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Register);