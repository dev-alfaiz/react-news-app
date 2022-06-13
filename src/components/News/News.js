import * as React from "react";

import { NewsItem } from "../../components";

class News extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=de92fc484f2845d9914a416365f13adc`;
    const response = await fetch(url);
    const responseData = await response.json();
    this.setState({
      articles: responseData.articles,
    });
  }
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
      </div>
    );
  }
}

export default News;
