import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Rooms from "./component/Rooms";
// import Nav from "./component/Nav";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" Component={Home} />
          <Route index path="/Services" Component={Services} />
          <Route index path="/Contact" Component={Contact} />
          <Route index path="/Rooms" Component={Rooms} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
