import React from "react";
class App extends React.Component{
  
  constructor(props){
 super(props)
  this.state={
count: 0
  }
 }

 increment=()=>{
  this.setState({
    count:this.state.count +1
  })
 }

 
 decrement=()=>{
  this.setState({
    count:this.state.count-1
  })
 }
  
 render(){
    return <div>
      <h1>Counter App</h1>
      <p>Count: {this.state.count}</p>
      <button type="button" onClick={this.increment}>Increment</button>
      <button type="button" onClick={this.decrement}>Decrement</button>

    </div>
  }
}
export default App
