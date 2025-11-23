import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import ListPage from './page/ListPage';
import SearchPage from './page/SearchPage';
import NewPage from './page/NewPage';

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/list" style={{ marginRight: "12px" }}>List</Link>
        <Link to="/search" style={{ marginRight: "12px" }}>Update/Delete</Link>
        <Link to="/new">Insert New</Link>
      </nav>
      <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/new" element={<NewPage />} />
      </Routes>
    </Router>
  );
};

export default App;
