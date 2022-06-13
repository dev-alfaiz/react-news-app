import * as React from "react";

import { Navbar, News } from "./components";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <News />
      </div>
    );
  }
}

export default App;
