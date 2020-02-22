import React, {Component} from 'react';
import {Card,Row,Col,InputGroup,FormControl,Button} from 'react-bootstrap';
class Input extends Component{
    state={
        input:"",
        day:""
    }
    onChangeHandler(e){
       this.setState({[e.target.name]:e.target.value});
    }
    render(){
        return(
            <Row>
            <Col>
            <Card>
            <Card.Body>
            <InputGroup className="mb-3">
            <FormControl
                placeholder="Add Text"
                aria-label="Add Text"
                aria-describedby="basic-addon2"
                name="input"
                value={this.state.input}
                onChange={(e)=>{this.onChangeHandler(e)}}
            />
            <FormControl
                as="select"
                placeholder="Select Day"
                aria-label="Select Day"
                aria-describedby="basic-addon2"
                name="day"
                type="day"
                value={this.state.date}
               onChange={(e)=>{this.onChangeHandler(e)}}
            >
              <option>Select   </option>   
              <option>Monday   </option>   
              <option>Tuesday  </option>   
              <option>Wednesday</option>   
              <option>Thursday </option>   
              <option>Friday   </option>   
              <option>Saturday </option>   
              <option>Sunday   </option>   
            </FormControl>
            <InputGroup.Append>
             {this.state.input && this.state.day && <Button variant="outline-secondary" 
             onClick={()=>this.props.inputhandler(this.state)}>
                 Save
                 </Button>}
            </InputGroup.Append>
            </InputGroup>
            </Card.Body>
            </Card>
            </Col>
        </Row>
        )
    }
}
export default Input;

        