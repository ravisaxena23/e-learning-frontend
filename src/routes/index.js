// src/routes/index.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CollegeSelectComponent from '../components/CollegeSelectComponent';

const RouteComponents = () => {
    return (
      <Routes>
        <Route path="/" element={<CollegeSelectComponent />} />
      </Routes>
    );
  };

export default RouteComponents;
