import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginCard from "./components/login";
import TestComponent from "./components/test"
import NoMatch from "./components/noMatch";

function TempHome(){
  return(
    <h1 className="flex justify-center italic ">This is the home page</h1>
  )
}

function App() {
  return(
      <Router>
        <Routes>
          <Route path="/" element={<TempHome />} />
          <Route path="/login" element={<LoginCard />} />
          <Route path="/test" element={<TestComponent />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
  )
}

export default App;
