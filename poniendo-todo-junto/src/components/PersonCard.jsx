import React from "react";
import "../stylesheets/PersonCard.css"

const Component = React.Component;

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age
        };
    }
    render() { 
        return (
            <>
                <h2>{this.props.surname}, {this.props.name}</h2>
                <span>Age: {this.state.age}</span>
                <span>Hair Color: {this.props.hairColor}</span>
                <button onClick={() => {this.setState({ age: this.state.age + 1 })}}>Birthday button for {this.props.name} {this.props.surname}</button>
            </>
        );
    }
}
 
export default PersonCard;