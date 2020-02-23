//child component
class Input extends React.Component{
    state={
        input:"",
        select:""
    }
    changeHandler(e){
       this.setState({[e.target.name]:e.target.value});
    }
    render(){
            return(
        <div>
        <div className="wrap_input_elem">
        <label>Add a note</label>
        <input val={this.state.input} 
        name="input"
        onChange={(e)=>this.changeHandler(e)}
        />
        </div>
           
        <div className="wrap_input_elem">
        <label>Select</label>
        <input list="Users" 
        name="select"
        value={this.state.value}
        onSelect={(e)=>this.changeHandler(e)}/>
        <datalist id="Users">
        {this.props.users.map(value=><option key={value}>{value}</option>)}
        </datalist>
        </div>
        <button className="wrap_btn" onClick={()=>this.props.combine(this.state)}>Append</button>
        </div>
        );
    }
}
//parent component
class App extends React.Component{
    state={
        users:["Shikhar","Bipul","Sitanshu","Kranthi","Raj","Mayank","Sumanth"],
        list:[],
        select:"All",
        selectedList:[]
    }
    /*componentDidUpdate(prevProps,prevState){
        if(this.state.select!==prevState.select){
            //this.select(this.state.select);
            console.log("cdu:",this.state.select,prevState);
            
        }
    }*/
    combineOnClick(val){
        this.setState({list:[...this.state.list,val]});
    }
    select(value){
        this.setState({select:value});
        
        let list=this.state.list;
        
        if(value!=='All')
        {   let acc=[];
            list.forEach(element => {
                if(element.select===value){
                    acc.push(element);
                }
        });
        if(acc.length>0){
            this.setState({selectedList:acc});
        }
        else{
            this.setState({selectedList:[]});
        }
        }

    }
    render(){
        let val=this.state.select==="All"?this.state.list:this.state.selectedList;
        console.log(this.state);
        return(<div className="container">
            <div className="wrapper_container">
            
            <div>
            <Input
            users={this.state.users}
            className="wrap_input" 
            combine={(val)=>this.combineOnClick(val)}
            />
            </div>
            
            <div className="wrap_list">
            
            <div className="wrap_list_dropdown">
                <select onChange={(e)=>this.select(e.target.value)}>
                <option>All</option>
                {this.state.users.map((val,index)=><option key={index}>{val}</option>)}
                </select>
            </div>
            
            <div className="wrap_list_items">
            <ol>
            {val.map((value,index)=><li key={index}>
                {value.input}--{value.select}
            </li>)}
            </ol>
            </div>
            
            </div>
            
            </div>
            </div>);
    }
}
ReactDOM.render(<App/>,document.getElementById('root'));
