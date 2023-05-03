import React , { useState , useEffect} from 'react'
import {v4} from 'uuid';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'


function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts , setContacts] = useState([])
  
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: v4(), ...contact}])
   
  }
  const removeContacthandler =(id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }
  
  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(contacts))
  }, [contacts])

  useEffect(()=> {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY),)
    if(retrievedContacts) setContacts(retrievedContacts)
  }, [])

  


  return (
    <div className='ui container'>
     <Header />
     <AddContact addContactHandler={addContactHandler} />
     <ContactList contacts={contacts} getContactId={removeContacthandler}/>
    </div>
  );
}

export default App;
