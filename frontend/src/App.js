import {BrowserRouter, Routes, Route} from 'react-router-dom'
// pages & componets
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Navbar from './components/Navbar';
import './index.css'  

// import style.css


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className='pages'>
          <Routes>
            <Route
            path="/"
            
            element={<Home/>}
            />
            <Route
            path="/Signup"
            
            element={<Signup/>}
            />
            <Route
            path="/Login"
            
            element={<Login/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
