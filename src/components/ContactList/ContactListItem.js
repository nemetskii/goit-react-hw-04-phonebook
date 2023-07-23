import React from 'react';
import css from './ContactListItem.module.css';

export default class ContactListItem extends React.Component {
  render() {
    return (
      <>
        <li className={css.list__item} style={{ marginBottom: '10px' }}>
          <span>
            {this.props.contact.name}: {this.props.contact.number}
          </span>
          <button
            type="button"
            onClick={() => {
              this.props.onDeleteButton(this.props.contact.id);
            }}
          >
            Delete
          </button>
        </li>
      </>
    );
  }
}
