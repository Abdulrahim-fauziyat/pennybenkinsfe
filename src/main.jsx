import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { HashRouter, Routes, Route } from 'react-router-dom'; 
import Signup from './component/auth/Signup.jsx'; 
import Login from './component/auth/Login.jsx'; 
import Forgetpassword from './component/auth/Forgetpassword.jsx'; 
import Createpassword from './component/auth/Createpassword.jsx';
import './index.css';
import CreateAccount from './component/auth/CreateAccount.jsx';
import Confirmcode from './component/auth/Confirmcode.jsx';
import App from './App.jsx'
import ResetPassword from './component/auth/Resetpassword.jsx';

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <HashRouter> 
        <Routes> 
         <Route path="/" element={<App />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<Forgetpassword />}/>
          <Route path="/createpassword" element={<Createpassword />}/>
          <Route path="/createaccount" element={<CreateAccount />}/>
          <Route path="/createaccount" element={<CreateAccount />}/>
          <Route path="/resetpassword" element={<ResetPassword />}/>
          <Route path="/confirmcode" element={<Confirmcode />}/>
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  </React.StrictMode>,
);
