import React, { Component } from 'react'

export class AddContact extends Component {
  render() {
    return (
      <div className='ui main'>
            <h2>Add contact</h2>
            <form className='ui form'>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Name'> </input>
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type='text' name='email' placeholder='Email'> </input>
                </div>
            </form>
      </div>
    )
  }
}

export default AddContact