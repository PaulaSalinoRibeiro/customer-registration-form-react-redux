import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState( { [name]: value } );
  }

  handleClick() {
    const { history } = this.props;
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

export default Login;