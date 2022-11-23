import { Routes, Route } from "react-router-dom";
import "./App.css";
import FormPop from "./Components/FormPop";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <FormPop />
    </>
  );
}

function Link() {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="form" element={<FormPop />}></Route>
    </Routes>
  );
}

export default App;
