import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/auth/login';  // Updated import to Layout.jsx

function App() {
  return (
    <div>
        {/* Header */}
        <header className="bg-green-800 text-white p-4 text-center">
          <h1 className="text-2xl font-bold">Transport Navigator</h1>
        </header>

        <Routes>
          <Route path ="/login" element ={<Login/>}>

          </Route>
        </Routes>

    
      </div>
   
  );
}

export default App;
