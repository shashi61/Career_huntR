import { Home, Error, Register } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {AllJobs, Profile, SharedLayout, Stats, AddJob} from './pages/dashboard'

function App() {
  return (
      <BrowserRouter>
       {/* <nav>
        <Link to='/'>Dashboard</Link>
        <Link to='/register'>Register</Link>
        <Link to='/home'>Home</Link>
      </nav> */}
        <Routes>
          <Route path="/" element={<div>dashboard</div>} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    

  );
}

export default App;
