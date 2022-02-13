import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: 'general'
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    }
  }
  async updateNews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea5146722055494b8da0d6568c2686d3&page=${this.props.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      article: parseddata.articles,
      totalArticles: parseddata.totalResults,
      loading: false
    });
  }
  async componentDidMount() {
    this.updateNews()
  }

   fetchMoreData = async() => {
    this.setState({page: this.state.page+1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea5146722055494b8da0d6568c2686d3&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseddata = await data.json();
    this.setState({
      article: this.state.article.concat(parseddata.articles),
      totalArticles: parseddata.totalResults
    });
    console.log(this.state.article);
  };

  render() {
    let { mode } = this.props;

    return (

      <>
        <div className='container my-3'>
          <h2 className='text-center' style={{ color: mode === 'dark' ? 'white' : 'black' }}>NewsMonkey - Top Headlines</h2>
          {this.state.loading && <Spinner/>}
          <InfiniteScroll
            dataLength={this.state.article.length}
            next={this.fetchMoreData}
            hasMore={this.state.article.length !== this.state.totalArticles}
            loader={<Spinner />}
          >
            <div className="container">
            <div className="row my-5">
              {this.state.article?.map((element, index) => {
                return <div className="col-md-4 my-3" key={index}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} img={element.urlToImage ? element.urlToImage : "https://images.hindustantimes.com/img/2022/02/11/1600x900/nirmala_sitharaman_1644562242946_1644562250427.JPG"} newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"} date={element.publishedAt} />
                </div>
              })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      </>
    )
  }
}

export default News