import { useState } from "react";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Me from "./Pages/Me";
import Reports from "./Pages/Reports";
import Settings from "./Pages/Settings";
import MainWrapper from "./Components/MainWrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <MainWrapper>
          <Routes>
            <Route path="/" element={<Me />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </MainWrapper>
      </BrowserRouter>
    </>
  );
}

export default App;
