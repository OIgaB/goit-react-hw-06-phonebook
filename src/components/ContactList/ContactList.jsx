// Рендер списку контактів <ul> та його 1го елемента <li>

// import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux"; 
import { ListContainer, Contact, Name, Number, Wrapper, Button } from "./styled";


export const ContactList = () => {    // contacts - масив об'єктів 
    const contacts = useSelector(state => state.contacts); // отримуємо масив об'єктів зі стору
    const dispatch = useDispatch();

    // Функція видалення 1го контакта по id 
    const onDeleteContact = (contactID) => {
         dispatch(deleteContact(contactID));
    };

    return (
        <ListContainer>                                    {/* <ul> */} 
            {contacts.map(({ id, name, number }) => (
                <Contact key={id}>                         {/* <li> */} 
                    <Wrapper>
                        <Name>{name}</Name>
                        <Number>{number}</Number>
                    </Wrapper>
                    <Button type='button' onClick={() => onDeleteContact(id)}>Delete</Button>
                </Contact>      
            ))}
        </ListContainer>
    );
}

// ContactList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.shape ({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//     })),
//     onDeleteContact: PropTypes.func.isRequired,
// };