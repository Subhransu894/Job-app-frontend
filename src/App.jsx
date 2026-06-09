import { Routes, Route, useLocation, BrowserRouter as Router } from "react-router-dom";
import Home from './pages/Home';
import JobForm from './pages/JobForm';
import JobDetails from './pages/JobDetails';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

function AppContent() {
  const location = useLocation();

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/jobs/:id' element={<ProtectedRoute><JobDetails /></ProtectedRoute>} />
        <Route path='/post-job' element={<ProtectedRoute><JobForm /></ProtectedRoute>} />
        
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}