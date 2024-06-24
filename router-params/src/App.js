import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <h2>TV APPS</h2>
          <div>
            <Link to="/app/Netflix" onClick={() => handleAppClick('Netflix')}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="Netflix" />
            </Link>
            <Link to="/app/HBOMax" onClick={() => handleAppClick('HBOMax')}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg" alt="HBO Max" />
            </Link>
            <Link to="/app/Hulu" onClick={() => handleAppClick('Hulu')}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg" alt="Hulu" />
            </Link>
            <Link to="/app/PrimeVideo" onClick={() => handleAppClick('PrimeVideo')}>
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png" alt="Prime Video" />
            </Link>
          </div>
          <Routes>
            <Route path="/app/:id" element={<Child />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );

  function handleAppClick(app) {
    store.dispatch({ type: 'SELECT_APP', payload: app });
  }
}

function Child() {
  let { id } = useParams();
  const selectedApp = useSelector((state) => state.selectedApp);

  return (
    <div>
      <h3>You Selected: <span>{selectedApp || id}</span></h3>
    </div>
  );
}