import React, { Component } from 'react'
import source from "./Photo.JPG"
import './App.css';

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
        show : false
    }
    }
    showme=()=>{
        this.setState({
        show: !this.state.show,
        });
    };
    
  render() {
    return (
      <div className="App-header">
  
        {this.state.show ? 
        <div>
        <button onClick={this.showme}>Hide</button>
        <h1 style={{color:"red",fontStyle:'Italic', fontSize:40}}> Full Name : {this.state.person.fullName}  </h1>
        <p style={{color:"black", fontSize:30}}> Biographie : {this.state.person.bio}  </p>
        <h2 style={{color:"blue", fontSize:20}}> Profession : {this.state.person.profession}  </h2>
        <img src={this.state.person.imgSrc} alt="mypicture" width="300px" heigh="300px"/>
        </div> : <button onClick={this.showme}>Show</button>}


      </div>
    )
  }
}
