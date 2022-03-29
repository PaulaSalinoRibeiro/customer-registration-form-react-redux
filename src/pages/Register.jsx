import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actClients } from '../redux/actions';

class Register extends Component {
  state = {
    name: '',
    age: '',
    email: '',
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value } )
  }

  handleClikc = () => {
    const { sendRegister } = this.props;
    sendRegister(this.state)
  }
  
  render() {
    const { name, age, email } = this.state;
    const { history } = this.props;
    return (
      <>
      <fieldset>
        <label htmlFor='name'>
          Nome:
          <input 
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

        </label>

        <label htmlFor='age'>
          Idade:
          <input 
            id="age"
            type="text"
            name="age"
            value={age}
            onChange={this.handleChange}
          />

        </label>

        <label htmlFor='email'>
          Email:
          <input 
            id="email" 
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />

        </label>

        <button
          type="button"
          onClick={ () => this.handleClikc()}
        >
          Gerar cadastro
        </button>

        <button
          type="button"
          onClick={ () => history.push('/clientes')}
        >
          Clientes Cadastrados
        </button>
      </fieldset>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  sendRegister: (value) => dispatch(actClients(value))
})

Register.propTypes = {
  sendRegister: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Register);