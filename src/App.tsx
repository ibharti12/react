import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Signup  from './components/Signup';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/signup'element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    
    
    </div>
  );
}

export default App;
