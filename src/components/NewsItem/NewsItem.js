import * as React from "react";

import { no_preview } from "../../images";

class NewsItem extends React.Component {
  render() {
    const { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="news-item my-3">
        <div className="card">
          <img
            src={imageUrl ? imageUrl : no_preview}
            className="card-img-top"
            alt={title}
          />
          <div className="card-body">
            <h5 className="card-title">{title ? title : ""}...</h5>
            <p className="card-text">{description ? description : ""}...</p>
            <p className="card-text">
              <small className="text-muted">
                By <strong>{author ? author : "Unknown"}</strong> on{" "}
                {date ? new Date(date).toGMTString() : ""}
              </small>
            </p>
            <a
              href={newsUrl ? newsUrl : ""}
              target={"_blank"}
              rel={"noreferrer"}
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
