import React, {Component} from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Login extends Component {
  handleFormSubmit({ email, password}){
    this.props.loginUser({ email, password});
  }

  renderAlert(){
    if (this.props.errorMessage) {
      return (
        <div id="alert-login">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password } } = this.props;
    return (
      <div className="container register">
        <div className="row">
          <div className="col m6">
            <div className="card darken-1">
              <div className="card-content">
                <span className="card-title">YAYBOX</span>
                <p>Entrar na sua conta</p>
                  <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <div className="input-field">
                      <label htmlFor="email" type="text">Email</label>
                      <input {...email} id="email" type="text" />
                    </div>
                    <div className="input-field">
                      <label htmlFor="password" type="password">Password</label>
                      <input {...password} id="password" type="password" />
                    </div>
                    {this.renderAlert()}
                    <button action="submit" className="btn btn-signup">ENTRAR</button>
                    <p>ou entre via</p>
                  </form>
                    <button className="facebook-sign-in btn">FACEBOOK</button>                      
                    <button className="github-sign-in btn">GITHUB</button>                      
              </div>              
            </div>
            <Link to="/register"><button className="btn btn-signin">CRIAR NOVA CONTA!</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.login.error };
}

export default reduxForm({
  form: 'login',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Login);