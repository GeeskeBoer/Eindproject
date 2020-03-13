import React, { Component } from "react";
import "./App.css";
import DashboardChart from "./components/DashboardChart";
import ButtonsName from "./container/ButtonsName";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <header className="App-header">Student Dashboard</header>
        </div>
        <nav>
          <div className="ButtonsName">
            <ButtonsName />
          </div>
        </nav>
        <main>
          <div className="Main">
            <DashboardChart />
          </div>
        </main>
      </div>
    );
  }
}
export default App;
