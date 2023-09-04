import React ,{useReducer} from 'react';

const initState = {count: 0}

const Countercall=(state,action)=>{
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};  
        case 'reset':
            return initState;
            
        default:
            return state;
    }
};



const Counter2=()=>{
    const [state,updatecall]=useReducer(Countercall,initState)

    return (
        <div>
            <h1>Counter: {state.count}</h1>
            <button onClick={()=>updatecall({type: 'increment'})}>INCREMENT</button>
            <button onClick={()=>updatecall({type: 'decrement'})}>DECREMENT</button>
            <button onClick={()=>updatecall({type: 'reset'})}>RESET</button>
        </div>
    )
}

export default Counter2;
