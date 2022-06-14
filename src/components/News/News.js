import * as React from "react";

import { NewsItem, Spinner } from "../../components";

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
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=de92fc484f2845d9914a416365f13adc&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const response = await fetch(url);
    const responseData = await response.json();
    this.setState({
      articles: responseData.articles,
      totalResults: responseData.totalResults,
      loading: false,
    });
  }

  handlePreviousClick = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=de92fc484f2845d9914a416365f13adc&page=${
      this.state.page === 1 ? 1 : this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const response = await fetch(url);
    const responseData = await response.json();
    this.setState({
      page: this.state.page === 1 ? 1 : this.state.page - 1,
      articles: responseData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=de92fc484f2845d9914a416365f13adc&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      const response = await fetch(url);
      const responseData = await response.json();
      this.setState({
        page: this.state.page + 1,
        articles: responseData.articles,
        loading: false,
      });
    }
  };

  render() {
    return (
      <div className="container my-3 news">
        <h1 className="text-center">Top Headlines!</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((article) => {
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
        {!this.state.loading && (
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
              Page {this.state.page} of{" "}
              {Math.ceil(this.state.totalResults / this.props.pageSize)}
            </span>
            <button
              type="button"
              onClick={this.handleNextClick}
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              className="btn btn-sm btn-dark"
            >
              Next &rarr;
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default News;
