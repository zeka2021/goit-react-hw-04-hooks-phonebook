import React, { Component } from 'react';
import s from './ContactList.module.css';

class ContactList extends Component {
  render() {
    return (
      <div className={s.container}>
        <ul className={s.listContainer}>{this.props.children}</ul>
      </div>
    );
  }
}
export default ContactList;
