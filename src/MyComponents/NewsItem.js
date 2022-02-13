
import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,description,img, newsUrl,author,date} = this.props;
    return (
        
      <div>
          <div className="card" >
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>
                <a rel="noreferrer" href={newsUrl} className="btn btn-dark" target="_blank">Read More</a>
            </div>
          </div>
      </div>
    )
  }
}
