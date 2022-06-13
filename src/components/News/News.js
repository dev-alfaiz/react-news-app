import * as React from "react";

import { NewsItem } from "../../components";
import SampleJson from "../../sampleOutput.json";

class News extends React.Component {
  articles = SampleJson.articles;
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3 news">
        <h2>Top Headlines!</h2>
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
