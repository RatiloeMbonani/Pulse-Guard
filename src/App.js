import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

// Pages
import Dashboard from "./pages/Dashboard";
import ConfirmReports from "./pages/ConfirmReports";
import PendingReports from "./pages/PendingReports";
import Analysis from "./pages/Analysis";
import HeatMap from "./pages/HeatMap";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "app dark" : "app"}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar dark={dark} setDark={setDark} />

        <div style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/confirm-reports" element={<ConfirmReports />} />
            <Route path="/pending-reports" element={<PendingReports />} />
            <Route path="/analysis" element={<Analysis />} />
            <Route path="/heatmap" element={<HeatMap />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>

      </div>
    </div>
  );
}

export default App;