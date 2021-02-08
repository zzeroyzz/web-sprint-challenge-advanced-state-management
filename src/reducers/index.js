import {
    LOADING_SMURF_DATA,
    DATA_LOAD_SUCCESS,
    DATA_LOAD_ERROR,
    ADD_SMURF,
    ADD_SMURF_SUCCESS,
    ADD_SMURF_FAIL
} from "../actions/index"

export const initialState = {
    isPosting:false,
    isLoading:false,
    newSmurfs:[]
}

export const reducer = (state = initialState, action)=>{
    switch(action.type){
        case LOADING_SMURF_DATA:
            return{
                ...state,
                isLoading:true
            }
            case DATA_LOAD_SUCCESS:{
                return{
                    isLoading:false,
                    newSmurfs:action.payload
                }
            }
            case DATA_LOAD_ERROR:{
                return{
                    ...state,
                    isLoading:true,
                    error:action.payload
                }
            }
            case ADD_SMURF:
                return{
                    ...state,
                    isPosting:true,
                }
            case ADD_SMURF_SUCCESS:
                return{
                    ...state,
                    newSmurfs:action.payload
                }
            case ADD_SMURF_FAIL:
                return{
                    ...state,
                    isPosting:false,
                    error:action.payload
                }
                default:
                    return state;

    }
}


//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary