import React from "react";
import "./app.scss";

export interface AppProps { }
export interface AppState { }

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="app-component">
        <header className="app-header">
          <div className="app-header-image"><img src="../images/y18.gif" alt="Hacker News" width="20px" height="20px" /></div>
          <div className="app-header-text">Hacker News</div>
        </header>
        <section className="app-section">
        
        </section>
        <footer className="app-footer">Hacker News</footer>
      </div>
    );
  }
}
export default App;
