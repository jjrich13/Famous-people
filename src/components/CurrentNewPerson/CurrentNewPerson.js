import React, {Component} from 'react';


class CurrentNewPerson extends Component{
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
            <div>
                New Person is {this.props.newPerson.name} and is famous for {this.props.newPerson.role} and has a popularity of {this.props.newPerson.popularity}/10
            </div>

        )
    }
}

export default CurrentNewPerson ;