import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import Login from "./Components/Login";
import About from "./Components/About";
import Userpage from "./Components/Userpage";
import EmailSystem from "./Components/EmailSystem";
import Settings from "./Components/Settings";
import Profile from "./Components/Profile";
import FriendsView from "./Components/FriendsView";
import NewGridView from "./Components/NewGridView";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/userpage" element={<Userpage />} />
        <Route exact path="/email" element={<EmailSystem />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/friendsView" element={<FriendsView />} />
        <Route exact path="/newgrid" element={<NewGridView />} />
      </Routes>
    </Router>
  );
}

export default App;
