import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocSummary from "./components/DocSummary";
import CreateDoc from "./components/CreateDoc";
import VirtualAssistant from "./components/VirtualAssistant";

const App = () => {
  return (
    <BrowserRouter>
      {/* <HomePage /> */}
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/docSummarisation" element={<DocSummary />} />
        <Route path="/createDoc" element={<CreateDoc />} />
        <Route path="/assistant" element={<VirtualAssistant />} />
        <Route path="/contact" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
