import { Routes, Route } from "react-router-dom";
import FormPop from "./Components/Form/FormPop";

import Index from "./Components/Index";
import "./App.css";
import Dropdown from "./Components/Dropdown/Dropdown";

function App() {
  return (
    <div className="app">
      <Link />
    </div>
  );
}

function Link() {
  return (
    <Routes>
      <Route path="/" element={<Index />}></Route>
      <Route path="form" element={<FormPop />}></Route>
      <Route path="dropdown" element={<Dropdown />}></Route>
    </Routes>
  );
}

export default App;
