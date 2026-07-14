import React from "react";
import TextEditor from "./components/TextEditor/TextEditor";
import { BrowserRouter as Router, Route, Routes ,Navigate} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/doc/${uuidV4()}`} />} />
        <Route path="/doc/:id" element={<TextEditor />} />
        <Route path="/doc" element={<TextEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
