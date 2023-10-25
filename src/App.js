import React,{useState} from 'react'
import './App.css';
import Counter from './component/Counter'
import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col, Button, Navbar} from 'react-bootstrap'

function App() {


  return (
<>
<Navbar bg="dark" style={{height:"50px"}}></Navbar>
<Container style={{border:"2px solid white", color:"beige"}} >
  <Row>
  <Col bg="dark"> col 1
  
  <Button variant="outline-primary" style={{display:"block"}}>submit</Button></Col>
  <Col> col 2
  
  <Button variant="outline-primary" style={{display:"block"}}>submit</Button></Col>
  <Col> col 3
  
  <Button variant="outline-primary" style={{display:"block"}}>submit</Button></Col>
  </Row>
</Container>
{/* <div className='video_container'>
<video autoPlay muted loop id="myVideo">
  <source src="Cupcakes.mp4" type="video/mp4" />
  Your browser does not support HTML5 video.
  
</video>
<div className='header_content'><h3>Check Your Time Here....</h3>
<Counter /></div>

</div>

{/* <Counter /> */}
{/* <TodoList />  */}
</>
  );
}

export default App;
