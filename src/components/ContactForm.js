import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    // console.log(e);
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  contactChek = () => {
    const { name, number } = this.state;
    const { contacts } = this.props;
    const namesIsIn = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const numbersIsIn = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (namesIsIn.includes(name) || numbersIsIn.includes(number)) {
      alert(`${name}${number} is already in contacts`);
    }

    if (name === '' || number === '') {
      alert('Enter all data, please');
    }
  };

  handleSubmit = e => {
    const { name, number } = this.state;

    e.preventDefault();
    this.setState({ name: '', number: '' });
    if (this.contactChek()) {
      return;
    }

    this.props.onSubmit(name, number);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form__label">
          <h3 className="form__title">Name</h3>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          <h3 className="form__title">Phone</h3>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit" className="form__btn">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onSubmit: PropTypes.func.isRequired,
};
