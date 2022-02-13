
import './App.css';

import React, { Component } from 'react'
import Navbar from './MyComponents/Navbar';
import News from './MyComponents/News';
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {

  constructor(){
    super();
    this.state={
      mode: 'light',
      progress: 0
    }
  }
  setProgress= (progress) => {
    this.setState({progress : progress})
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
      <LoadingBar
      height={3}
        color='#f11946'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} key="general" mode={this.state.mode} pageSize={6} country="in" category='general'/>}></Route> 
          <Route exact path="/business" element={<News setProgress={this.setProgress} key="business" mode={this.state.mode} pageSize={6} country="in" category='business'/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key="entertainment" mode={this.state.mode} pageSize={6} country="in" category='entertainment'/>}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" mode={this.state.mode} pageSize={6} country="in" category='general'/>}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} key="health" mode={this.state.mode} pageSize={6} country="in" category='health'/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} key="science" mode={this.state.mode} pageSize={6} country="in" category='science'/>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} key="sports" mode={this.state.mode} pageSize={6} country="in" category='sports'/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} key="technology" mode={this.state.mode} pageSize={6} country="in" category='technology'/>}></Route>
      </Routes>
      </Router>
      </>
    )
  }
}

