import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./routes/Home";
import Search from "./routes/Search";
import Store from "./routes/Store";
import Community from "./routes/Community";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path={`${process.env.PUBLIC_URL}/`} element={< Home />}/>
        <Route path={`${process.env.PUBLIC_URL}/movie/:id`} element={< Detail />}/> */}
        <Route path="/" element={ <Home/>}/>
        <Route path="/search" element={ <Search/>}/>
        <Route path="/store" element={ <Store/>}/>
        <Route path="/community" element={ <Community/>}/>
      </Routes>
  </Router>
  );
}

export default App;
