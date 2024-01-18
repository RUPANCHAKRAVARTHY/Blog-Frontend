import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/GeneralScreens/Home";
import LoginScreen from "./components/AuthScreens/LoginScreen";
import RegisterScreen from "./components/AuthScreens/RegisterScreen";
import AddStory from "./components/StoryScreens/AddStory";

import AdminScreen from "./components/AuthScreens/AdminScreen";
import Admin from "./components/GeneralScreens/Admin";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/admin" element={<Admin />} />

          <Route exact path="/addstory" element={<AddStory />} />
          <Route exact path="/admin/login" element={<AdminScreen />} />
          <Route exact path="/login" element={<LoginScreen />} />
          <Route exact path="/register" element={<RegisterScreen />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
