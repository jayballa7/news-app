import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Login from './components/Login';
import Signup from "./components/Signup";
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Members from "./components/Members";


function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Signup/> */}
      <Router >

      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/memberspage" component={Members}/>
      <Route exact path="/" component={Signup} />

    </Router>

    </div>
  );
}


export default App;
