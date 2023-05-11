import React from 'react'
// import { Link } from 'react-router-dom';
import ContactCard from './ContactCard'

function ContactList(props) {
    console.log(props)
    const deleteContactHandler  = (id) => {
        props.getContactId(id)
    };

    const renderContactList = props.contacts.map((contact) =>{
        return (
            <ContactCard contact={contact} clickHandler = {deleteContactHandler} key = {contact.id}/>
        )
       
    })
    console.log(renderContactList)
  return (
    <div class= 'main'>
        <h2>Contact List</h2>
        {/* <Link to = '/add'>
        <button className='ui button blue right'>Add Contact</button>
        </Link> */}
        
        <div className='ui celled list'>
            {renderContactList}
        </div>
    </div>
    
  )
}

export default ContactList