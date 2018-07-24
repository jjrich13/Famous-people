import React, {Component} from 'react';

class Body extends Component{
    constructor(props){
        super(props)

        this.state = {
            person:
                {
                    name: 'Will Smith',
                    role: 'Fresh Prince of Bel Air'
                }
            
            
        };
    }
    handleNameChange = (event) =>{
        this.setState({
            person : {
                ...this.state.person,
                name : event.target.value
            }
        })
    }

    handleRoleChange = (event) =>{
        this.setState({
            person : {
                ...this.state.person,
                role : event.target.value
            }
        })
    }

    handleClick = (event) =>{
        console.log(this.state);
    }

    render(){
        return(
            <div>
            <p>Add New Person</p>
            <input type="text" placeholder="name" onChange={this.handleNameChange}/>
            <input type="text" placeholder="role" onChange={this.handleRoleChange}/>
            <button onClick={this.handleClick}>Submit</button>
            <p>{this.state.person.name} is famous for: {this.state.person.role}</p>


            </div>
        )
    }
}




export default Body;