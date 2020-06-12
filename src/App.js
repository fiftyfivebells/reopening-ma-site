import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./assets/styles/App.css";
import Businesses from "./components/Businesses";
import Citizens from "./components/Citizens";
import Home from "./components/Home";
import Phases from "./components/Phases";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Home</div>,
    main: () => <Home />,
  },
  {
    path: "/citizens",
    sidebar: () => <div>Citizens</div>,
    main: () => <Citizens />,
  },
  {
    path: "/phases",
    sidebar: () => <div>Phases</div>,
    main: () => <Phases />,
  },
  {
    path: "/businesses",
    sidebar: () => <div>Businesses</div>,
    main: () => <Businesses />,
  },
];

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "20%",
              height: "100%",
              background: " #f0f0f0",
              position: "fixed",
              "z-index": 1,
              top: 0,
              left: 0,
              "overflow-x": "hidden",
              "padding-top": "20px",
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/citizens">Citizens</Link>
              </li>
              <li>
                <Link to="/phases">Phases</Link>
              </li>
              <li>
                <Link to="/businesses">Businesses</Link>
              </li>
            </ul>
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
