// import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';
import { Input, LabelForm, Button, Form } from './FormAddContactStyled';
import { useState } from "react";



export const FormAddContact = ({addContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid(5);
  const numberId = nanoid(8);


  const handleChange = e => {
    switch(e){
      case 'name':
        return setName(e.target.value)

        case 'number':
          return setNumber(e.target.value)

          default: return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact();

    setName('');
    setNumber('');
    
  };

  return (
    <Form onSubmit={handleSubmit}>
        <div>
          <LabelForm htmlFor={nameId}>Name</LabelForm>
          <Input
            name="name"
            id={nameId}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <LabelForm htmlFor={numberId}>Number</LabelForm>
          <Input
            name="number"
            id={numberId}
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChange}
            required
          />
        </div>

        <Button>Add contact</Button>
      </Form>
  )
}




// export class FormAddContact extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   nameId = nanoid();
//   numberId = nanoid();

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const { name, number } = this.state;
//     this.props.onSubmit({ name, number });
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     const { nameId, numberId, handleSubmit, handleChange } = this;

//     return (
//       <Form onSubmit={handleSubmit}>
//         <div>
//           <LabelForm htmlFor={nameId}>Name</LabelForm>
//           <Input
//             name="name"
//             id={nameId}
//             type="text"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             value={this.state.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <LabelForm htmlFor={numberId}>Number</LabelForm>
//           <Input
//             name="number"
//             id={numberId}
//             type="tel"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             value={this.state.number}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <Button>Add contact</Button>
//       </Form>
//     );
//   }
// }

// FormAddContact.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
