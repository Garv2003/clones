import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Premium from "./pages/Premium";
import Account from "./pages/Account";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/*" element={<Home />} />
          <Route path="/premium/menu" element={<Premium />} />
          <Route path="/account/overview" element={<Account />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
