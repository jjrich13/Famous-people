import React, {Component} from 'react';


class NewPersonForm extends Component{
    

    render(){
        return(
            <form onSubmit={this.props.handleClick}>
                <input value={this.props.newPerson.name} type="text" placeholder="name" onChange={this.props.handleChange('name')}/>
                <input value={this.props.newPerson.role} type="text" placeholder="role" onChange={this.props.handleChange('role')}/>
                <input value={this.props.newPerson.popularity} type="number" placeholder="popularity" onChange={this.props.handleChange('popularity')}/>
                <input type="submit" />
            </form>
        )
    }
}


export default NewPersonForm;








