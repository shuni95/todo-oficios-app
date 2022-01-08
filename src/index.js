import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { Login } from './Login';
import { UserRegister } from './UserRegister';
import Layout from './Layout';

render(
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<UserRegister/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
