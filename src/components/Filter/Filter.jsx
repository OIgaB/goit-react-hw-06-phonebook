// Фільтр пошуку у списку контактів

// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { Input } from '../ContactForm/styled';
import { Container } from "./styled";


export const Filter = () => { 
    const filter = useSelector(state => state.filter); // отримуємо масив об'єктів зі стору
    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(setFilter(event.target.value));  //відправка даних в filterSlice для записування в стор
        console.log('filter:', filter);    
    };

    return (
        <Container>
            <label>
                Find contacts by name
                <Input 
                    type="name"
                    name="filter"
                    // value={filter}
                    placeholder="Oles"
                    onChange={handleChange}
                    required
                />
            </label>
        </Container>
    );
}

// Filter.propTypes = {
//     filter: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// };