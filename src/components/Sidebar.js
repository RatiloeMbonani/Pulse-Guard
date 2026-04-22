import {
  Home,
  CheckCircle,
  Clock,
  BarChart3,
  Map,
  Calendar,
  Settings,
  User
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">

      <div>
        {/* Logo + Admin */}
        <div className="sidebar-header">

          {/* Logo */}
          <h1 className="logo">Pulse Guard</h1>

          {/* Admin Section (NOT a Menu) */}
          <div className="admin-info">
            <User size={20} />
            <span>Admin</span>
          </div>

        </div>

        {/* Menu */}
        <div className="menu">
          <Menu icon={<Home size={18} />} text="Dashboard" to="/" />
          <Menu icon={<CheckCircle size={18} />} text="Confirmed Reports" to="/confirm-reports" />
          <Menu icon={<Clock size={18} />} text="Pending Reports" to="/pending-reports" />
          <Menu icon={<BarChart3 size={18} />} text="Analysis" to="/analysis" />
          <Menu icon={<Map size={18} />} text="Heat Map" to="/heatmap" />
          <Menu icon={<Calendar size={18} />} text="Schedule" to="/schedule" />
        </div>
      </div>

      {/* Bottom Settings */}
      <div className="menu">
        <Menu icon={<Settings size={18} />} text="Settings" to="/settings" />
      </div>

    </div>
  );
}

function Menu({ icon, text, to }) {
  return (
    <Link to={to} className="menu-item">
      {icon}
      <span>{text}</span>
    </Link>
  );
}