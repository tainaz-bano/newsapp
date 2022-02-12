
import './App.css';

import React, { Component } from 'react'
import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

export default class App extends Component {

  constructor(){
    super();
    this.state={
      mode: 'light'
    }
  }
  toggle= ()=>{
    if(this.state.mode==='light'){
      this.setState({mode:'dark'});
      document.body.style.backgroundColor='#101010';
    }
    else{
      this.setState({mode: 'light'});
      document.body.style.backgroundColor ='white'
    }
  }
  render() {

    return (
      <>
      <Router>
      <Navbar mode={this.state.mode} toggle={this.toggle}/>
        <Routes>
          <Route exact path="/" element={<News key="general" mode={this.state.mode} pageSize={6} country="in" category='general'/>}></Route> 
          <Route exact path="/business" element={<News key="business" mode={this.state.mode} pageSize={6} country="in" category='business'/>}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" mode={this.state.mode} pageSize={6} country="in" category='entertainment'/>}></Route>
          <Route exact path="/general" element={<News key="general" mode={this.state.mode} pageSize={6} country="in" category='general'/>}></Route>
          <Route exact path="/health" element={<News key="health" mode={this.state.mode} pageSize={6} country="in" category='health'/>}></Route>
          <Route exact path="/science" element={<News key="science" mode={this.state.mode} pageSize={6} country="in" category='science'/>}></Route>
          <Route exact path="/sports" element={<News key="sports" mode={this.state.mode} pageSize={6} country="in" category='sports'/>}></Route>
          <Route exact path="/technology" element={<News key="technology" mode={this.state.mode} pageSize={6} country="in" category='technology'/>}></Route>
      </Routes>
      </Router>
      </>
    )
  }
}

