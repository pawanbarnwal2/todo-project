import React,{useState} from 'react'

 const Counter = () => {

    const [counter,setCounter]=useState(0);
    const [period,setPeriod]= useState();
    
  
    const handleStart =()=>{
   
    const retVal =  setInterval(()=>{
       setCounter((prevState)=>prevState+1);
      },2000)
  
      setPeriod(retVal);
    
    }
    const handlePause=()=>{
      
      clearInterval(period)
    }
  return (
    <div className="main_container">
    <div  className="label_container">
      <h1>Label:-({counter})</h1>
    </div>
    <div className="action_container">
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>

    </div>
   </div>
  )
}
export default Counter