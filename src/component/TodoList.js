import React,{useState} from 'react'

const TodoList = () => {
    const [list , setList]= useState([]);
    const [text,setText]=useState("");

const handleChange=(e)=>{
    setText(e.target.value)
   
}
const handleSubmit=(e)=>{
e.preventDefault();
    if(text){
       const listData = {
        item:text,
        id: Date.now(),
       } ;
       setList((prev)=>[...prev,listData],console.log(list));
    }
    console.log(list)

    

}

  return (
    <div className='main_container'>
        <div>{list.length >0 && list.map((i)=>
            <div className='label_container'>
            <li>{i.item}</li></div>
        )}</div>
    <input type="text" onChange={handleChange}></input>
    <button className="button_style" onClick={handleSubmit}>Submit</button>

    </div>
  )
}
export  default TodoList