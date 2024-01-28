import React, { Component } from "react";
import NewsItem from "./newsitem";
import Loading from "./Loading";
import { Outlet } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalAricles: 0
    };
  }

  async handlechanges() {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}PRODUCT_KEY${this.state.page}&pageSize=9`;
    this.setState({ loading: true });
    let fetching = await fetch(url);
    this.setState({ loading: true });
    let data = await fetching.json();
    this.setState({
      articles: this.state.articles.concat(data.articles),
      totalAricles: data.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}PRODUCT_KEY${this.state.page}&pageSize=9`;
    this.setState({ loading: true });
    let fetching = await fetch(url);
    this.props.settopbar(100);
    this.setState({ loading: true });
    let data = await fetching.json();
    this.setState({
      articles: data.articles,
      totalAricles: data.totalResults,
      loading: false,
    });
  }
  
  fetchMoreData = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      console.log("New page number:", this.state.page); // Debug: Check new page number
      this.handlechanges();
    });
  };
  
  render() {
    return (
      <div>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              padding: "20px",
              margin: "10px",
            }}
          >
            Top-News of "News world"
          </h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalAricles}
            loader= {<Loading />} >
              <div className="container">
            <div className="row">
              {this.state.articles.map((element) => (
                <div className="col" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    time={element.publishedAt}
                    imageUrl={element.urlToImage}
                    newidentification={element.url}
                    arthur={element.author}
                    Source={element.source.name}
                  />
                </div>
              ))}
              </div>
            </div>
          </InfiniteScroll>
          </div>
    );
  }
}
<Outlet />;

export default News;
