import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Verification from './Verification';
import SearchForm from './SearchForm';
import ValuationResults from './ValuationResults';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/verify" element={<Verification />} />
      <Route path="/search" element={<SearchForm />} />
      <Route path="/result" element={<ValuationResults />} />
    </Routes>
  );
}
