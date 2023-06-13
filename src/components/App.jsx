// import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title, SubTitle, AlertMessage } from "./styled";


export const App = () => {
  const contacts = useSelector(state => state.contacts); // отримуємо масив об'єктів зі стору
  const filter = useSelector(state => state.filter); // отримуємо масив об'єктів зі стору


  //const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts); // новий оператор ?? - якщо буде undefined/null, то поверне defaultContacts
  //початкове значення contacts - це отримаі дані з localStorage або дефолтний список контактів


  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts)); //якщо в state (contacts) є зміни, то записали в localStorage
  // }, [contacts]);




  // Функція, яка шукає співпадіння введеного в фільтр імені з іменами об'єктів масиву, який в state
  //повертає новий масив знайдених об'єктів (якщо фільтр в state пустий, то новий масив контактів не створиться, 
  // а з ф-ції повернеться масив контактів, що в state)

  const getVisibleContacts = () => {
      return contacts.filter(({ name }) => 
      name.toLowerCase().includes(filter.toLowerCase()) 
    );
  }
  

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm /> 

      <SubTitle>Contacts</SubTitle>
      <Filter />

      {getVisibleContacts().length !== 0 && <ContactList contacts={getVisibleContacts()} />}  
      {getVisibleContacts().length === 0 && <AlertMessage>There is no contact matching your request.</AlertMessage>}
          
    </Container>
  );
}