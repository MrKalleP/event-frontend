import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./utils/NotFound";
import SideBar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SideBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;