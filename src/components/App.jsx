// import React, { Component } from 'react';
import { FormAddContact } from './FormAddContact/FormAddContact';
import { ContactsList } from './ContactsList/ContactsList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { Conteiner } from './AppStyled';

import { useState, useEffect } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });

  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

 


  const handleChange = (e) => {
    const {name, value} = e.target;  
    
    switch(name) {
      case "filter":
        return setFilter(value);
      case "number":
        return setNumber(value); 
      case "name":
        return setName(value); 
      default:
      return;
    }
  };




  const serchingFilter = (e) => {
    const value = e.currentTarget.value;
    setFilter(value);
  }; 

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const isDublicate =({name, number}) => {

        const result = contacts.find(
          contact => contact.name === name && contact.number === number
        );
        return result;
      }

  
  const handleSubmit = (data) => {
    data.preventDefault();
    if (isDublicate({name, number})) {
            return alert(
              `Контакт ${name} з номером ${number} вже є в списку контактів`
            );
          }

    setContacts((prevContacts) => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return [...prevContacts, newContact]      
    });

    setName('');
    setNumber('');
  };


      const deleteContacts = (contactId) => {  
        setContacts((prevContacts) => {   
        const newContacts = prevContacts.filter(contact => contact.id !== contactId);
        return newContacts;
      })
    };


  const getFilteredContacts = () => {
    if (!filter) {
            return contacts;
          }
      
          const normalizedFilter = filter.toLocaleLowerCase();
      
          const filteredContacts = contacts.filter(({ name, number }) => {
            const normalizedName = name.toLocaleLowerCase();
            const normalizedNumber = number.toLocaleLowerCase();
            const result =
              normalizedName.includes(normalizedFilter) ||
              normalizedNumber.includes(normalizedFilter);
            return result;
          });
          return filteredContacts;
    //       const normalizeFilter = filter.toLowerCase();
    // return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
  };

  const filteredText = getFilteredContacts();

  return (
<Conteiner>
      <h1>PhoneBook</h1>
      <FormAddContact 
      onSubmit={handleSubmit} 
      onChange={handleChange} 
      name={name}
      number={number}
      />
      <h2>Contacts</h2>
      <Filter items={filter} onChange={serchingFilter} />

      <ContactsList items={filteredText} deleteContacts={deleteContacts} />
    </Conteiner>

  );
};

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   addContact = data => {
//     if (this.isDublicate(data)) {
//       return alert(
//         `Контакт ${data.name} з номером ${data.number} вже є в списку контактів`
//       );
//     }
//     this.setState(prev => {
//       const newContact = {
//         id: nanoid(),
//         ...data,
//       };
//       return {
//         contacts: [...prev.contacts, newContact],
//       };
//     });
//   };

//   deleteContacts = id => {
//     this.setState(prev => {
//       const newListContacts = prev.contacts.filter(
//         contact => contact.id !== id
//       );

//       return {
//         contacts: newListContacts,
//       };
//     });
//   };

//   isDublicate({ name, number }) {
//     const { contacts } = this.state;
//     const result = contacts.find(
//       contact => contact.name === name && contact.number === number
//     );
//     return result;
//   }

//   handleChange = e => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//   getFilteredContacts() {
//     const { contacts, filter } = this.state;

//     if (!filter) {
//       return contacts;
//     }

//     const normalizedFilter = filter.toLocaleLowerCase();

//     const filteredContacts = contacts.filter(({ name, number }) => {
//       const normalizedName = name.toLocaleLowerCase();
//       const normalizedNumber = number.toLocaleLowerCase();
//       const result =
//         normalizedName.includes(normalizedFilter) ||
//         normalizedNumber.includes(normalizedFilter);
//       return result;
//     });
//     return filteredContacts;
//   }

//   render() {
//     const { addContact, handleChange, deleteContacts } = this;
//     const { filter } = this.state;
//     const contacts = this.getFilteredContacts();
//     return (
//       <Conteiner>
//         <h1>PhoneBook</h1>
//         <FormAddContact onSubmit={addContact} />
//         <h2>Contacts</h2>
//         <Filter items={filter} onChange={handleChange} />

//         <ContactsList items={contacts} deleteContacts={deleteContacts} />
//       </Conteiner>
//     );
//   }
// }
