import { Sun, Moon } from "lucide-react";

export default function Navbar({ dark, setDark }) {
  return (
    <div className="navbar">

      <div className="nav-right">
        <button onClick={() => setDark(!dark)}>
          {dark ? <Sun /> : <Moon />}
        </button>
      </div>

    </div>
  );
}