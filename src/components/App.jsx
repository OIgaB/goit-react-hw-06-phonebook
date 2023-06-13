import { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import { setFilter  } from '../redux/filterSlice';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container, Title, SubTitle, AlertMessage } from "./styled";
import { nanoid } from 'nanoid';



export const App = () => {
  const dispatch = useDispatch();


  //const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem('contacts')) ?? defaultContacts); // новий оператор ?? - якщо буде undefined/null, то поверне defaultContacts
  //початкове значення contacts - це отримаі дані з localStorage або дефолтний список контактів

  //const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts)); //якщо в state (contacts) є зміни, то записали в localStorage
  // }, [contacts]);


  // Функція викликається при відправці форми - змінює state (зшиває масив контактів з новим об'єктом 1го контакта)
  // Якщо введене ім'я вже є в state контактах, то спливе відповідне повідомлення і об'єкт з цим ім'ям не додасться до state 
  

  // const addContact = (userInput) => {  // приймає об'єкт 1го контакта
    
  //   const newContactObject = {id: nanoid(), ...userInput};  // короткі властивості (name: name, number: number)
    
  //   const nameClone = contacts.find((contact) => ( // вертає об'єкт з ім'ям, що повторюється
  //     contact.name.toLowerCase() === userInput.name.toLowerCase()
  //   ));

  //   if(nameClone) {
  //     Notify.failure(`${userInput.name} is already in contacts`); 
  //     return;
  //   }

  //   setContacts(prevState => [...prevState, newContactObject]); //зшиває масив контактів з новим об'єктом 1го контакта 
  // }


  // Функція, що змінює state (записує в filter введене користувачем значення)
  // const handleFilter = (event) => {
  //   setFilter(event.target.value);  
  // };


  // Функція, яка шукає співпадіння введеного в фільтр імені з іменами об'єктів масиву в state
  //повертає новий масив знайдених об'єктів (якщо фільтр в state пустий, то новий масив контактів не створиться, 
  // а з ф-ції повернеться масив контактів, що в state)
  // const getVisibleContacts = () => {
  //     return contacts.filter(({ name }) => 
  //     name.toLowerCase().includes(filter.toLowerCase()) 
  //   );
  // }
  

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm /> 

      {/* <SubTitle>Contacts</SubTitle>
      <Filter filter={filter} onChange={handleFilter} /> */}

      {/* {getVisibleContacts().length !==0 && <ContactList contacts={getVisibleContacts()} onDeleteContact={deleteContact} />}  якщо фільтр пустий, то передасться [] контактів зі state, якщо повний, то [] зі співпадіннями  */}
      <ContactList />
      {/* {getVisibleContacts().length ===0 && <AlertMessage>There is no contact matching your request.</AlertMessage>} */}
          
    </Container>
  );
}