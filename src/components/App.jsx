import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import{Form} from './Form'
import { Filter } from './Filter';
import { List } from './List';

import { Container } from './App.styled';

export class App extends Component {
  state = {
   contacts: [],
filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: [ { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
 { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
 { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
 { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },] });
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  submitFormHandler = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      alert(`${data.name} is already in contact`);
    } else {
      const newContact = { ...data };
      newContact.id = nanoid();
      this.setState(prevState => {
        return { contacts: [...prevState.contacts, newContact] };
      });
    }
  };

   filterContacts = () => {
   const { contacts, filter } = this.state;
   const lowerCaseFilter = filter.toLowerCase();
   return contacts.filter(({ name }) =>
     name.toLowerCase().includes(lowerCaseFilter)
   );
  };
  
   deleteContact = id => {
   this.setState(prevState => ({
     contacts: prevState.contacts.filter(contact => contact.id !== id),
   }));
  };
  
  onFilterName = evt => {
  this.setState({ filter: evt.target.value });
};
 
  render() {
 const filteredName = this.filterContacts();

    return (
   <Container>
        <h1>Phonebook</h1>
        <Form formSubmit={this.submitFormHandler} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onChangeInput={this.onFilterName}
        />
        <List
          contacts={filteredName}
          onDelete={this.deleteContact}
        />
   </Container>
   );
  }
 };
