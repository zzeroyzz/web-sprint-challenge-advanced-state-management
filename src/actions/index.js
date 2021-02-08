import axios from 'axios';

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
export const LOADING_SMURF_DATA  = "LOADING_SMURF_DATA"
export const DATA_LOAD_SUCCESS  = "DATA_LOAD_SUCCESS"
export const DATA_LOAD_ERROR  = "DATA_LOAD_ERROR"
export const ADD_SMURF  = "ADD_SMURF"



export const fetchSmurf = (location) => (dispatch) =>{
    dispatch({type:LOADING_SMURF_DATA});
    console.log(`making axios call`)
    setTimeout(() =>{
    axios
    .get(`http:/localhost:3333/smurfs`,location)
    .then((res) =>{
        console.log(`KH: actions.js fetchSmurf axios:good`)
        dispatch({ type: DATA_LOAD_SUCCESS,
        payload:{name:res.data.name,position:res.data.position, nickname:res.data.nickname, description:res.data.description}
            })
        })
        .catch(err =>{
            console.log(`KH: actions.js fetchSmurf axios:bad`,err)
            dispatch({type:DATA_LOAD_ERROR, payload:`error fetching data ${err.message}`})
        })
    },1500)
}

export const addSmurf = (smurf) => (dispatch) =>{
    axios
    .post(`http:/localhost:3333/smurfs`,smurf)
    .then((res) =>{
        dispatch({type:ADD_SMURF, payload:{name:res.data.name,position:res.data.position, nickname:res.data.nickname, description:res.data.description}})
        console.log(`response from server`,res)
    })
    .catch(err =>{
        console.log(`smurf error`,err)
    })
}