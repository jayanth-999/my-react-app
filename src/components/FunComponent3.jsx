import React,{useEffect, useReducer} from "react";
import axios from "axios";

const initialState={data:[]}

const GetData=(state,action)=>{
    switch (action.type) {
        case 'FETCH_SUCCES':
            return {data:action.payload};
        default:
            return state;
    }
}



const FunComponent3=()=>{
    const [state,dispatch]=useReducer(GetData,initialState)

    useEffect(() => {
      const fetchData=async()=>{
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({type:'FETCH_SUCCES',payload:response.data})
        }
        catch(error){
            console.log(error);
        }
      }
      fetchData();
    }, [])
    
    return (
        <div>
            {state.data.map(item=>(
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.email}</p>
                    <p>{item.phone}</p>
                    <p>{item.company.name}</p>
                </div>
            ))}
        </div>
    )
}

export default FunComponent3;