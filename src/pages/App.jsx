import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListCatatan from "./ListCatatan";
import NotFound from "./NotFound";
import Layout from "../components/Layout";
import DetailCatatan from "./DetailCatatan";
import TambahCatatan from "./TambahCatatan";
import ArchiveCatatan from "./ArchiveCatatan";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route Component={ListCatatan} path="/" />
          <Route Component={DetailCatatan} path="/notes/:id" />
          <Route Component={TambahCatatan} path="/notes/new" />
          <Route Component={ArchiveCatatan} path="/archive" />
          <Route Component={NotFound} path="*" />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
