import * as React from "react";

import { NewsItem } from "../../components";

class News extends React.Component {
  render() {
    return (
      <div className="news">
        News Component <NewsItem />
      </div>
    );
  }
}

export default News;
