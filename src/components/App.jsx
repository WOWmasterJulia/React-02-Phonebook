import { Component } from 'react';
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from './ContactList/ContactList';
import { ContactFind } from './ContactFind/ContactFind';

export class App extends Component {
  state = {
    contacts: [],
    filter:'',
  }

  saveContact = item => {
    this.state.contacts.push(item)
    console.log("app- item", this.state.contacts );
    this.setState({ contacts: this.state.contacts })
  }
  findChange = evt => {
    this.setState({ filter: evt.currentTarget.value })
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(elem => elem.name.toLowerCase().includes(filter.toLowerCase()));
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm getContact={this.saveContact} />
        <h2>Contacts</h2>
        <ContactFind find={filter} findChange={this.findChange} />
        <ContactList contacts={filteredContacts} />
      </div>
    )
  }
}



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
