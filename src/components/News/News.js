import * as React from "react";

import { NewsItem } from "../../components";

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=de92fc484f2845d9914a416365f13adc&page=1&pageSize=20`;
    const response = await fetch(url);
    const responseData = await response.json();
    this.setState({
      articles: responseData.articles,
      totalResults: responseData.totalResults,
    });
  }

  handlePreviousClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=de92fc484f2845d9914a416365f13adc&page=${
      this.state.page === 1 ? 1 : this.state.page - 1
    }&pageSize=20`;
    const response = await fetch(url);
    const responseData = await response.json();
    this.setState({
      page: this.state.page === 1 ? 1 : this.state.page - 1,
      articles: responseData.articles,
    });
  };

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=de92fc484f2845d9914a416365f13adc&page=${
        this.state.page + 1
      }&pageSize=20`;
      const response = await fetch(url);
      const responseData = await response.json();
      this.setState({
        page: this.state.page + 1,
        articles: responseData.articles,
      });
    }
  };

  render() {
    return (
      <div className="container my-3 news">
        <h1>Top Headlines!</h1>
        <div className="row">
          {this.state.articles.map((article) => {
            return (
              <div className="col-md-4" key={article.url}>
                <NewsItem
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            onClick={this.handlePreviousClick}
            disabled={this.state.page <= 1}
            className="btn btn-sm btn-dark"
          >
            &larr; Previous
          </button>
          <span>
            Page No. {this.state.page} of{" "}
            {Math.ceil(this.state.totalResults / 20)}
          </span>
          <button
            type="button"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            className="btn btn-sm btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
