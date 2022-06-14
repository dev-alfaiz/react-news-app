import * as React from "react";

import { loading } from "../../images";

class Spinner extends React.Component {
  render() {
    return (
      <div className="text-center spinner">
        <img src={loading} alt={"loading"} />
      </div>
    );
  }
}

export default Spinner;
