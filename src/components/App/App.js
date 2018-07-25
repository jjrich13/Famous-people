import React, { Component } from 'react';
import Header from '../Header/Header'
import PersonList from '../PersonList/PersonList'
import './App.css';
import NewPersonForm from '../NewPersonForm/NewPersonForm';
import CurrentNewPerson from '../CurrentNewPerson/CurrentNewPerson'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      personList:
          [{
              name: 'Tom Cruise',
              role: 'Mission Impossible',
              popularity: 10
          }],
      newPerson: {
          name: '',
          role: '',
          popularity: ''
      }
      
      
  };
  }
  handleChange = (propertyName) => (event) => {
    this.setState({
        newPerson : {
            ...this.state.newPerson,
            [propertyName] : event.target.value
        }
    })
  }

  handleClick = (event) =>{
    event.preventDefault();
    this.setState({
        personList: [...this.state.personList, this.state.newPerson],
        newPerson : {
            name: '',
            role: '',
            popularity: ''
        }
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <CurrentNewPerson newPerson={this.state.newPerson}/>
        <NewPersonForm 
          handleChange={this.handleChange} 
          handleClick={this.handleClick} 
          newPerson={this.state.newPerson} 
          personList={this.state.personList}
        />
        <PersonList personList={this.state.personList}/>
      </div>
    );
  }
}

export default App;
