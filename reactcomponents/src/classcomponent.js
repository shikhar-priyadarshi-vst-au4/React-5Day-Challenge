import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
//Class Component
class Comp extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(<Card className='text-center'>
            <Card.Body className="w-50 border border-dark h5">
            Class components are ES6 classes. They are <br/>
            more complex than functional components <br/>
            including constructors, life-cycle methods, <br/>
            render() function and state (data) management. <br/>
            </Card.Body>
        </Card>)
    }
}
export default Comp;
