import React, {Component} from 'react';

class PersonList extends Component{
    constructor(props){
        super(props)

        // this.state = {
        //     personList:
        //         [{
        //             name: 'Tom Cruise',
        //             role: 'Mission Impossible',
        //             popularity: 10
        //         }],
        //     newPerson: {
        //         name: '',
        //         role: '',
        //         popularity: ''
        //     }
            
            
        // };
    }

    // handleChange = (propertyName) => (event) => {
    //     this.setState({
    //         newPerson : {
    //             ...this.state.newPerson,
    //             [propertyName] : event.target.value
    //         }
    //     })
    // }

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

    // handleClick = (event) =>{
    //     console.log(this.state);
    //     event.preventDefault();
    //     this.setState({
    //         personList: [...this.state.personList, this.state.newPerson],
    //         newPerson : {
    //             name: '',
    //             role: '',
    //             popularity: ''
    //         }
    //     })
    // }

    render(){

        let personListItemArray = this.props.personList.map( (person, index) => {
            return <li key={index}>The person {person.name} is famous for {person.role} and has a popularity rating of {person.popularity}/10</li>
          });
        
        return(
            <div>
            <p>Add New Person</p>
            
            {/* <p>{this.state.person.name} is famous for: {this.state.person.role}, and is this popular: {this.state.person.popularity}</p> */}
            <ul className="App-intro">
                {personListItemArray}
             </ul>

            </div>
        )
    }
}




export default PersonList;