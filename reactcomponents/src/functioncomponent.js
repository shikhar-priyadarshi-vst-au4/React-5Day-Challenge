import React,{Component} from 'react';
import {Card} from 'react-bootstrap';
function App(props){
 return(<Card className='text-center'>
        <Card.Body className="w-50 border border-dark"> 
        <h5>React Function Components -- also known as React Functional Components --<br/> 
         are the status quo of writing modern React applications.<br/> 
         In the past, there have been various React Component Types,<br/> 
         but with the introduction of React Hooks it's possible to write<br/> 
         your entire application with just functions as React components.</h5>
        </Card.Body>
        </Card>);
}
export default App;
//functional way of rendering component.