import React, {Component} from 'react';

class Body extends Component{
    constructor(props){
        super(props)

        this.state = {
            person:
                {
                    name: '',
                    role: '',
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

    // handleNameChange = (event) =>{
    //     this.setState({
    //         person : {
    //             ...this.state.person,
    //             name : event.target.value
    //         }
    //     })
    // }

    // handleRoleChange = (event) =>{
    //     this.setState({
    //         person : {
    //             ...this.state.person,
    //             role : event.target.value
    //         }
    //     })
    // }

    handleClick = (event) =>{
        console.log(this.state);
        event.preventDefault();
        this.setState({
            person: {
                name: '',
                role: '',
                popularity: ''
            }
        })
    }

    render(){
        return(
            <div>
            <p>Add New Person</p>
            <form onSubmit={this.handleClick}>
                <input value={this.state.person.name} type="text" placeholder="name" onChange={this.handleChange('name')}/>
                <input value={this.state.person.role} type="text" placeholder="role" onChange={this.handleChange('role')}/>
                <input value={this.state.person.popularity} type="number" placeholder="popularity" onChange={this.handleChange('popularity')}/>

                <input type="submit" />
            </form>
            <p>{this.state.person.name} is famous for: {this.state.person.role}, and is this popular: {this.state.person.popularity}</p>


            </div>
        )
    }
}




export default Body;