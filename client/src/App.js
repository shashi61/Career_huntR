import { Home, Error, Dashboard, Register } from "./pages";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
       {/* <nav>
        <Link to='/'>Dashboard</Link>
        <Link to='/register'>Register</Link>
        <Link to='/home'>Home</Link>
      </nav> */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    

  );
}

export default App;
