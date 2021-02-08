import React from 'react';

class Smurf extends React.Component {
    render() {
        const { smurf } = this.props;
<div className="smurfs">
    <h1>Name: {props.smurf.name} </h1>
    <h2>Nickname:{props.smurf.nickname}</h2>
    <h2>Position:{props.smurf.position}</h2>
    <h2>Description:{props.smurf.description}</h2>
</div>
        return(<div data-testid="smurf" className="card">
        </div>);
    }
}

export default Smurf;

//Task List:
//1. Access smurf to be displayed through props.
//2. Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.