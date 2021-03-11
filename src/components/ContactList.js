import ContactListItem from './ContactListItem';
import PropTypes from 'prop-types';

const ContactList = ({ filteredContacts, onRemove }) => {
  return (
    filteredContacts.length > 0 && (
      <ul className="ContactList">
        {filteredContacts.map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onClickRemove={() => onRemove(id)}
          />
        ))}
      </ul>
    )
  );
};

export default ContactList;

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemove: PropTypes.func.isRequired,
};
