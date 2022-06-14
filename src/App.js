import * as React from "react";

import { Navbar, News } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <News pageSize={20} />
      </div>
    );
  }
}

export default App;
