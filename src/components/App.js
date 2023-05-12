import React , { useState , useEffect } from 'react'
// import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {v4} from 'uuid';
import './App.css';
import Header from './Header'
import AddContact from './AddContact'
import ContactList from './ContactList'


function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts , setContacts] = useState(() => {
    const contacts = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return contacts ? JSON.parse(contacts) : [];
  })
  
  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: v4(), ...contact}])
   
  }
  const removeContacthandler =(id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }
  
  

  // useEffect(()=> {
  //   const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  //   if (retrievedContacts) setContacts(retrievedContacts)
  // }, [])

  useEffect(()=> {
    localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(contacts))
  }, [contacts])

  


  return (
    <div className='ui container'>
      {/* <Router >
        
        <Routes>
        <Route path = '/' Component={() => <ContactList contacts={contacts} getContactId={removeContacthandler}/>} />
        <Route path= '/add' Component={() => <AddContact addContactHandler={addContactHandler} />} /> */}
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContacthandler}/>
        {/* </Routes>
        
      </Router> */}
     
    </div>
  );
}

export default App;
