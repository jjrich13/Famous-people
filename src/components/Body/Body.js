import React, {Component} from 'react';

class Body extends Component{
    constructor(props){
        super(props)

        this.state = {
            person:
                {
                    name: 'Will Smith',
                    role: 'Fresh Prince of Bel Air',
                    popularity: 0
                }
            
            
        };
    }

    handleChange = (propertyName) => (event) => {
        this.setState({
            person : {
                ...this.state.person,
                [propertyName] : event.target.value
            }
        })
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
            <form onSubmit={this.handleClick}>
                <input type="text" placeholder="name" onChange={this.handleChange('name')}/>
                <input type="text" placeholder="role" onChange={this.handleChange('role')}/>
                <input type="number" placeholder="popularity" onChange={this.handleChange('popularity')}/>

                <input type="submit" />
            </form>
            <p>{this.state.person.name} is famous for: {this.state.person.role}, and is this popular: {this.state.person.popularity}</p>


            </div>
        )
    }
}




export default Body;