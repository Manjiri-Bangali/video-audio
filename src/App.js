import './App.css';
import Signup from './components/login/signup/signup';
import Signin from './components/login/signin/signin';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signin />}/>
      </Routes>
    </div>
  );
}

export default App;
