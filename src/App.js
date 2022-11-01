import React, { Component } from "react";
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ClearButton } from './components/ClearButton';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import Calculator from "./pages/Calculator";
import Mountain from "./pages/Mountain";
import Beach from "./pages/Beach";
import * as math from 'mathjs';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Calculator/>}/>
          <Route path="mountain" element={<Mountain />} />
          <Route path="beach" element={<Beach />} />
          <Route path="*" element={<Navigate to="/" />}  />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
