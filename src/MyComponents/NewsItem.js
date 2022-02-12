
import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,img, newsUrl} = this.props;
    return (
        
      <div>
          <div className="card" >
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer" href={newsUrl} className="btn btn-dark" target="_blank">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}
