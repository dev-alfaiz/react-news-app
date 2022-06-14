import * as React from "react";

import { pnf } from "../../images";

const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <img
        src={pnf}
        alt={"page-not-found"}
        style={{ width: "100%", height: "calc(100vh - 20px)" }}
      />
    </div>
  );
};

export default PageNotFound;
