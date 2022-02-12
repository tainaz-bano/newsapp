import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: 'general'
  }
  static propTypes={
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(){
    super();
    this.state={
      article : [],
      loading : false,
      page: 1,
      totalArticles : 0,
    }
  }
  
  async componentDidMount(){
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea5146722055494b8da0d6568c2686d3&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data =await fetch(url);
      let parseddata = await data.json();
      this.setState({article : parseddata.articles , 
        totalArticles: parseddata.totalResults,
      loading: false});
  } 
  onPrev = async () =>{
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea5146722055494b8da0d6568c2686d3&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data =await fetch(url);
    let parseddata = await data.json();
      this.setState({
        page: this.state.page-1,
        article : parseddata.articles,
        loading: false
      })
  }  
   onNext= async () =>{
     if((this.state.page+1) > Math.ceil((this.state.totalArticles)/this.props.pageSize)){
     }
     else{
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea5146722055494b8da0d6568c2686d3&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading : true})
      let data =await fetch(url);
      let parseddata = await data.json();   
        this.setState({
          page: this.state.page+1,
          article : parseddata.articles,
          loading :false
        })
     }
    
   }

  render() {
    let {mode}= this.props;
console.log(mode);
    return (

      <>
      <div className='container my-3'>
          <h2 className='text-center' style={{color : mode==='dark'?'white':'black'}}>NewsMonkey - Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          <div className="row my-5">
          {!this.state.loading && this.state.article?.map((element) => {
               return <div className="col-md-4 my-3" key={element.url}>
               <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} img={element.urlToImage?element.urlToImage:"https://images.hindustantimes.com/img/2022/02/11/1600x900/nirmala_sitharaman_1644562242946_1644562250427.JPG"} newsUrl={element.url}/>
               </div>  
              })}   
        </div>  
        <div className="container d-flex justify-content-between">
        <button type="button" disabled= {this.state.page<=1} className="btn btn-dark btn-lg"onClick={this.onPrev} >&larr; Prev</button>
        <button type="button" disabled={(this.state.page+1) > Math.ceil((this.state.totalArticles)/this.props.pageSize)} className="btn btn-dark btn-lg" onClick={this.onNext}>Next &rarr;</button>
        </div> 
      </div>
      </>
    )
  }
}

export default News