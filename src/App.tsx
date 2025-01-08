import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import NotFound from "./utils/NotFound";
import MainLayout from "./components/homepage/MainLayout";
import SingleProjectPage from "./components/projects/SingleProjectPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:id" element={<SingleProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;