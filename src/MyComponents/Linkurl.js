// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Linkurl extends Component {
  static propTypes = {}
  aa= async ()=>{
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=ea5146722055494b8da0d6568c2686d3" 
    let data = await fetch(url);
    let parsed = await data.json();
    console.log(parsed);
    }
  render() {
    return (
      <div>
          aa();
          console.log("hiiiii");
      </div>
    )
  }
}

export default Linkurl

