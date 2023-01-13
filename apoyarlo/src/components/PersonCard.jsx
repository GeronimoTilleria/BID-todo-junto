import React from "react";

const Component = React.Component;

class PersonCard extends Component {
    
    render() { 
        return (
            <>
                <h2>{this.props.surname}, {this.props.name}</h2>
                <span>Age: {this.props.age}</span>
                <br />
                <span>Hair Color: {this.props.hairColor}</span>
            </>
        );
    }
}
 
export default PersonCard;