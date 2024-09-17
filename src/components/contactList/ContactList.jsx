import Contact from "../contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const searchTerm = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts && filteredContacts.length > 0 ? (
      filteredContacts.map((contact) => (
        <Contact key={contact.id}
        {...contact}
        onDelete = {handleDelete} />
      ))
    ) : ( 
    <p>No contacts available</p>
    )}
    </ul>
  );
};

export default ContactList;