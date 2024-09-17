import { useEffect } from "react";
import "./App.css";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";
import ContactForm from "./components/contactForm/ContactForm";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, selectContacts } from "./redux/contactsSlice";
import { changeFilter, selectNameFilter } from "./redux/filtersSlice";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const searchTerm = useSelector(selectNameFilter);

  const handleAddContact = (values) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <SearchBox searchTerm={searchTerm} setSearchTerm={handleChangeFilter} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
    </div>
  );
};

export default App;