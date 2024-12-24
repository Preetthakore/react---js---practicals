import React,{useReducer}from"react";


function reducer(state,action){
    if(action.type==='increment'){
        return state+1;
    }
    if(action.type==='decrement'){
        return state-1;
    }
}

function Us3(){

    const[state, dispatch]=useReducer(reducer,0);

    return (

        <div>
           
           <h3>{state}</h3>
           <button onClick={()=>dispatch({type:"increment"})}>increment </button>
           <button onClick={()=>dispatch({type:"decrement"})}>decrement </button>
            
           

        </div>
    );
}

export default Us3