import React, { Component } from 'react'
import source from "./Photo.JPG"
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class AppClass extends Component {
    constructor(props){
    super(props);
    this.state={
        person:{
        fullName :"Elyes MANI",
        bio : "That's my Bio",
        imgSrc : source,
        profession : "Develloper"
        },
        show : false,
        timerS: 0,
        timerM: 0,
        timerH: 0
    }
    }
    showme=()=>{
        this.setState({
        show: !this.state.show,
        });
    };

    componentDidMount() {
        const increment=() => {
            this.state.timerS==59?
            this.state.timerM==59?
            this.setState({
                timerS: 0,
                timerM: 0,
                timerH: this.state.timerH+1,
                }):
            this.setState({
                timerS: 0,
                timerM: this.state.timerM+1,
                }):
            this.setState({
                timerS: this.state.timerS+1,
                });

          };

          setInterval(increment, 1000);
        
      }
    
  render() {
    return (
      <div className="App-header">
  
        {this.state.show ? 
        <div>
        <Button variant="danger" style={{position:"absolute",top:10, left:100}} onClick={this.showme}>Hide Profile</Button>
        {this.state.timerH>0?
        <h1 style={{color:"red",fontStyle:'Normal', fontSize:20}}> Time since the component was mounted since : {this.state.timerH} Hour {this.state.timerM} Minutes  {this.state.timerS} Seconds  </h1>
        :
        this.state.timerM>0?
            <h1 style={{color:"red",fontStyle:'Normal', fontSize:20}}> Time since the component was mounted since : {this.state.timerM} Minutes  {this.state.timerS} Seconds  </h1>
            :
            <h1 style={{color:"red",fontStyle:'Normal', fontSize:20}}> Time since the component was mounted since : {this.state.timerS} Seconds  </h1>
        
        }      
        <h1 style={{color:"white",fontStyle:'Italic', fontSize:30 ,  backgroundColor:"red" , textAlign:"center", fontWeight:800}}> MY PROFILE  </h1>
        <h1 style={{color:"black", fontSize:20}}> Full Name : {this.state.person.fullName}  </h1>
        <p style={{color:"black", fontSize:20}}> Biographie : {this.state.person.bio}  </p>
        <h2 style={{color:"blue", fontSize:20}}> Profession : {this.state.person.profession}  </h2>
        <img style={{marginLeft:"100px"}} src={this.state.person.imgSrc} alt="mypicture" width="300px" heigh="300px"/>
        </div> : <Button variant="success" style={{position:"absolute",top:10, left:100}} onClick={this.showme}>Show Profile</Button>}


      </div>
    )
  }
}
