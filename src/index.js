import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//my files 

//import Navbar from './Navbar'
//import Home from './Home'  

// 2nd task 
     import Home from './learn_route.jsx/home';
     import Hero from './learn_route.jsx/heros';
     import Login from './learn_route.jsx/login';
     import Register from './learn_route.jsx/register';
     import Layout from './learn_route.jsx/layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='home' element={<Home/>} />
          <Route path="heros" element={<Hero/>} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
