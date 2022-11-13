import React from 'react';
// import PropTypes from 'prop-types';
import { DeleteButton, List } from './ContactListStyled';



export function ContactsList({ items, deleteContacts }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <List key={id}>
        {name} : {number} <DeleteButton onClick={() => deleteContacts(id)}>Delete</DeleteButton>
      </List>
    );
  });
  return <ul>{elements}</ul>;
}

// ContactsList.propTypes = {
//   items: PropTypes.array.isRequired,
//   deleteContacts: PropTypes.func.isRequired,
// };
