import React, {useState} from 'react';
import {connect} from "react-redux";
import {addSmurf} from "../actions/index"
import {fetchSmurf} from "../actions/index"
const initialState={
    name:"",
    nickname:"",
    position:"",
    description:""

}
const AddForm =({isLoading, error, props}) =>{
   
        const [data,setData] = useState(initialState);

    const handleSubmit = e =>{
    e.preventDefault();
    setData(initialState)
    addSmurf(data)
    console.log("submitted",data)
    // props.fetchSmurf(data)
}
    const handleChange = e =>{
        console.log("something changed")
        setData({...data,
        [e.target.name]: e.target.value})
    }
    if(error){
        return <h2>We got an error: {error}</h2>
      }
      if(isLoading){
        return <h2>Fetching Smurfs</h2>
      }
        return(<section>
            <h2>Add Smurf</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br/>
                    <input onChange={handleChange} name="name" id="name" />

                    <label htmlFor="name">Nickname:</label><br/>
                    <input onChange={handleChange} name="nickname" id="nickname" />

                    <label htmlFor="name">Position:</label><br/>
                    <input onChange={handleChange} name="position" id="position" />

                    <label htmlFor="name">Description:</label><br/>
                    <input onChange={handleChange} name="description" id="description" />
                </div>

                {error !== '' ? <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: {error} </div> : ''}
                <button  onClick={() => addSmurf(data)}>Submit Smurf</button>
            </form>
        </section>);
    }

const mapStateToProps = (state) => {
    return {
        newSmurf:state.newSmurf,
        error:state.error,
        isLoading:state.isLoading
    }
}
export default connect(mapStateToProps, {addSmurf})(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.