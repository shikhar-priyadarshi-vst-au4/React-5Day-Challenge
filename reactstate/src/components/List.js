import React, {Component} from 'react';
import {Card, InputGroup, FormControl} from 'react-bootstrap';
class List extends Component{
    state={
     data:[],
     day:'Anyday',
     days:['Anyday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday',
    'Sunday']
    }
    componentDidMount(){
        this.setState({data:this.props.text});
        console.log("CDM:",this.state.data);
    }
    componentDidUpdate(prevProps){
        if(prevProps.text.length<this.props.text.length){
           this.setState({data:this.props.text});
           console.log("CDU:",this.state.data);
        }
    }
    changeDay(e){
    let day=e.target.value;
    let data=this.props.text;
    console.log(this.state.data,data);
    this.setState({day:day});
    if(day!=='Anyday'){
      let acc=[];
        data.forEach(value=>{
          if(value.day===day){
              acc.push(value);
          }
       })
       if(acc.length>0){
        this.setState({data:acc});
       }
       else{
           this.setState({data:[]});
       }
    }
    else{
        this.setState({data:this.props.text});
    }
    }
    render(){
        return(
            <Card>   
             <div className="d-flex justify-content-between">
             <Card.Body>
             {this.state.data.map((val,index)=><li key={index}>
             {val.input}--{val.day}    
             </li>)}
             </Card.Body>
             <InputGroup className='w-25'>
             <FormControl
              as="select"
              value={this.state.day}
              onChange={(e)=>this.changeDay(e)}
              type="day"
              size="sm">
              {this.state.days.map((val,index)=>{return <option key={index}>{val}</option>})}            
             </FormControl>
             </InputGroup>
             </div>
             </Card>
        ) 
    }
}
export default List; 
