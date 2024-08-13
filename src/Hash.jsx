import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './component/auth/Signup';
import Login from './component/auth/Login';
import Forgotpassword from './component/auth/Forgetpassword';
import Createpassword from './component/auth/Createpassword';

function Hash() {
  return (
    <Routes>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<Forgotpassword />} />
      <Route path="/createpassword/" element={<Createpassword />} />
      {/* Add a catch-all route for 404 */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default Hash;
