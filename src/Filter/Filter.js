import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Filter.module.css';

class Filter extends Component {
  render() {
    const { filter, onChange } = this.props;

    return (
      <div className={s.filterForm}>
        <div className={s.filterGrup}>
          <label className={s.filterGrupLabel}>
            Find contacts by name
            <input
              className={s.filterGrupInput}
              type="text"
              name="filter"
              value={filter}
              onChange={onChange}
            />
          </label>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
export default Filter;
