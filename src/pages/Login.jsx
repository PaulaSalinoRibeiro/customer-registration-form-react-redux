import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actLogin } from '../redux/actions';
import PropTypes from 'prop-types';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState( { [name]: value } );
  }

  handleClick() {
    const { history, sendLogin } = this.props;
    sendLogin(this.state);
    history.push('/clientes')
  }

  render() {
    const { email, password } = this.state;
    
    return (
      <>

        <fieldset>

          <label htmlFor="email">
          Email:
          {' '}
          <input
            id="email"
            name="email"
            value={ email }
            onChange={ this.handleChange }
            type="text"
            required
          />
          </label>

          <label htmlFor="senha">
            Senha:
            {' '}
            <input
              id="senha"
              name="password"
              value={ password }
              onChange={ this.handleChange }
              type="password"
              required
            />
          </label>

          <button
            type="button"
            onClick={ () => this.handleClick() }
          >
            Enviar
          </button>

        </fieldset>

      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendLogin: (state) => dispatch(actLogin(state))
})

Login.propTypes = {
  sendLogin: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Login);