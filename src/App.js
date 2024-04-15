import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Rooms from "./component/Rooms";
import Login from "./component/Register.js";
import LoginOwner from "./component/RegisterOwner.js";
import LoginForAll from "./component/Login.js"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" Component={Home} />
          <Route index path="/Services" Component={Services} />
          <Route index path="/Contact" Component={Contact} />
          <Route index path="/Rooms" Component={Rooms} />
          <Route index path="/register" Component={Login} />
          <Route index path="/registerOwner" Component={LoginOwner} />
          <Route index path="/login" Component={LoginForAll} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
