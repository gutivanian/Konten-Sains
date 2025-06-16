import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogLanding from "./pages/BlogLanding";
import BlogDetail from "./pages/BlogDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogLanding />} />
        <Route path="/materi/:id" element={<BlogDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
