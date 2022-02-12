import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
       <nav>
        <Link to='/'>Dashboard</Link>
        <Link to='/register'>Register</Link>
        <Link to='/home'>Home</Link>
      </nav>
        <Routes>
          <Route path="/" element={<div>Dashboard</div>} />
          <Route path="/register" element={<div>Register</div>} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<div>Error</div>} />
        </Routes>
      </BrowserRouter>
    

  );
}

export default App;
