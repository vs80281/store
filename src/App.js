import React from "react";
import "./App.css";
import Home from "./Home";
import {
  BrowserRouter as Router,
  
  Route,
  Routes,
} from "react-router-dom";


const Page404 = () => {
  return <h1>Pagenot Found</h1>;
};

const App = () => {
  return (
    < div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="*" element={<Page404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;