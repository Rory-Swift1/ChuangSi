import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Regist from './pages/Regist';
import Login from './pages/Login';
import Main from './pages/Main';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='regist' element={<Regist />} />
    </Routes>
    <App />
    </BrowserRouter>
    
);
