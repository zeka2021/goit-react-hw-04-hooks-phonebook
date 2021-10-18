import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Contact.module.css';

class Contact extends Component {
  render() {
    const {
      contact: { name, number, id },
      deleteContact,
    } = this.props;

    return (
      <li className={s.itemContact}>
        <span className={s.itemSpanContent}>{name}</span>
        <span className={s.itemSpanContent}>{number}</span>
        <button className={s.button} onClick={() => deleteContact(id)}>
          Delet contact
        </button>
      </li>
    );
  }
}

Contact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contact: PropTypes.objectOf(PropTypes.string.isRequired),
};
export default Contact;
