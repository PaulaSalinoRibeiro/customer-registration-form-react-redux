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

  handleClick = () => {
    const { sendRegister } = this.props;
    sendRegister(this.state);
  }

  render() {
    const { name, age, email } = this.state;
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
  sendRegister: (state) => dispatch(actClients(state))
})

Register.propTypes = {
  sendRegister: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Register);