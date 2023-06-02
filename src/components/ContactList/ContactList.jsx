import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList = ({ contacts }) => (
    <ul>
        {contacts.map(({ id, name, number }) => {
            return <li className={css.list_item } key={id}>{ `${name} :  ${number}` }</li>
        })}
    </ul>
)

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
}