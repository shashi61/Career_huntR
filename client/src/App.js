import { Home, Error, Register, ProtectedRoute } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllJobs, Profile, SharedLayout, Stats, AddJob } from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
        path='/' 
        element={
        <ProtectedRoute>
          <SharedLayout />
        </ProtectedRoute>
        } 
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<AddJob />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
