import "./App.css";
import { Route, Routes } from "react-router-dom";
import Admin from "./components/Admin";
import Add from "./components/Add";
import Edit from "./components/Edit";
import View from "./components/View";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Admin />} />
        <Route path="add" element={<Add />} />
        <Route path="edit/:id" element={<Edit />} />
        <Route path="view/:id" element={<View />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
