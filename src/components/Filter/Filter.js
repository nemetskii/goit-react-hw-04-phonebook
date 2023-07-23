import React from 'react';
import css from './Filter.module.css';
export default class Filter extends React.Component {
  render() {
    return (
      <>
        <label
          className={css.filter__label}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <span>Find contacts by name</span>
          <input
            type="text"
            value={this.props.value}
            name="filter"
            onChange={this.props.changeValue}
          />
        </label>
      </>
    );
  }
}
