import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <>

        <fieldset>

          <label htmlFor="email">
          Email:
          {' '}
          <input
            id="email"
            name="email"
            type="text"
            required
          />
          </label>

          <label htmlFor="senha">
            Senha:
            {' '}
            <input
              id="senha"
              name="senha"
              type="text"
              required
            />
          </label>

          <button
            type="submit"
          >
            Enviar
          </button>

        </fieldset>
      
      </>
    )
  }
}

export default Login;