import React, {Component} from 'react';
import {Card,Row,Col,Container} from 'react-bootstrap';
import Input from './Input';
import List from './List';
class App extends Component{
    state={
        text:[]
    }
    setText(value){
      this.setState({
          text:[...this.state.text,value]
      })
    }
    render(){
        console.log(this.state);
        return(
            <Container className="mt-5">
            <Card className="border border-highlight">
            <Card.Body>
            <Row>
            <Col sm={12} lg={(this.state.text.length>0)?6:12}>
                <Input inputhandler={val=>this.setText(val)}/></Col>    
            {this.state.text.length>0 && <Col sm={12} lg={6}>
                <List text={this.state.text}/></Col>}
            </Row>        
            </Card.Body>
            </Card>
            </Container>
            
        )
    }
}
export default App;
/*
*/