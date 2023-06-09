import React, { Component } from 'react'


export class AddContact extends Component {
    state = { 
        name:'',
        email:'',
    }

// the add function listens for the onSubmit eventhandler
    
    add=(e)=>{
        
        e.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert('All fields are mandatory!')
            return
        }
        this.props.addContactHandler(this.state)
        this.setState({name:'' , email: '',})
        
    }
    
    


  render() {
    return (
      <div className='ui '>
            <h2>Add contact</h2>
            <form className='ui form' onSubmit={this.add}>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' 
                        name='name' 
                        placeholder='Name' 
                        onChange={(e) => this.setState({name: e.target.value})}
                        value = {this.state.name}
                    />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input type='text' 
                        name='email' 
                        placeholder='Email' 
                        onChange={(e) => this.setState({email : e.target.value})}
                        value = {this.state.email}
                    /> 
                </div>
               
                <button className='ui button blue right'>Add</button>
               
                
            </form>
      </div>
    )
  }
}

export default AddContact