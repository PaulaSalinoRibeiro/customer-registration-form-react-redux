/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Clientes extends Component {

  renderClientes = () => {
    const { getClients } = this.props;
    return (
      <>  
      {getClients.map(({ id, name, email, age  }) => 
          (<section key={id}>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h3>{email}</h3>
          </section>)
        )}
      </>
    )
  }

  notClientes = () => {
    const { history } = this.props;
    return (
      <>
        <h1>Nenhum Cliente Cadastrado</h1>
        <button
          type="button"
          onClick={() => history.push('/register')}
        >
          Realizar Cadastro
        </button>
      </>
    )
  }
  

  render() {
    const { getClients } = this.props;
      return (
        <>
          { getClients.length > 1 ? this.renderClientes() : this.notClientes() }
        </>
      )
    }  
}


const mapStateToProps = state => ({
  getClients: state.clientsReducer.clients,
})

Clientes.propTypes = {
  getClients: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    age: PropTypes.string,
    email: PropTypes.string,
  })).isRequired,
}

export default connect(mapStateToProps)(Clientes);