// App.js
import Firstpg from './Firstpg';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Employee from './Employee';
import CreateEmployee from './CreateEmployee';
import UpdateEmployee from './UpdateEmployee';
import LoginUser from './LoginUser';
import Signup from './Signup';
import { AuthProvider, useAuth } from './AuthContext';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/adminLogin" element={<LoginUser/>}/>
          <Route path="/" element={<Firstpg />} />
          <Route
            path="/create"
            element={<PrivateRoute><CreateEmployee /></PrivateRoute>}
          />
          <Route
            path="/dashboard"
            element={<PrivateRoute><Dashboard /></PrivateRoute>}
          />
          <Route path="/employeeLogin" element={<Signup />} />
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};

export default App;
