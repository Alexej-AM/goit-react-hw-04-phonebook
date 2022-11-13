import React from 'react';
// import PropTypes from 'prop-types';

export function Filter({ filter, onChange }) {
  return (
    <>
      <label htmlFor="">Find contacts by name</label>
      <input type="text" name="filter" value={filter} onChange={onChange} />
    </>
  );
}

// Filter.propTypes = {
//   onChange: PropTypes.func.isRequired,
//   filter: PropTypes.string,
// };
