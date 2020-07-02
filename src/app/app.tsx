import React from "react";
import "./app.css";

export interface AppProps { }
export interface AppState { }

class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <div className="app-component">
        <header className="app-header">Hackernews</header>
        <section className="app-section">
          <aside className="app-sidebar-primary">
          </aside>
          <main className="app-main-section">
            <section className="app-main-content-section">  
            </section>
          </main>
        </section>
        <footer className="app-footer"></footer>
      </div>
    );
  }
}
export default App;
