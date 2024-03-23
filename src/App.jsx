import { useState } from 'react'
import './App.css'
import { legacy_createStore } from 'redux'
const ADD_DATA="ADD_DATA"

const useReducer=(state=[],action)=>{
  switch(action.type){
    case ADD_DATA:
      return action.payload

      default :
      return state
  }

}

const store=legacy_createStore(useReducer)

function App() {
  const [count, setCount] = useState(0)
const [data,setData]=useState('')
 const changeData=(data)=>{
  store.dispatch({
    type:ADD_DATA,
    payload:data
  })
 }
 store.subscribe(()=>{
  setCount((prev)=>prev+1)
 })

 return (
  <div>
   <pre>
    {
      JSON.stringify(store.getState())
    }
   </pre>
   <input type="text" onChange={(e)=>setData(e.target.value)} />
  <button onClick={()=>changeData(data)}>Add</button>
  </div>
)
    
  }
 
    

export default App
