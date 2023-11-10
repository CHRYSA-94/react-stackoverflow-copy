import Header from "./assets/components/header";
import SideNav from "./assets/components/side-nav";
import { Outlet } from "react-router-dom";
import { Home } from "@mui/icons-material";

export default function App() {
  return (
    <div className="app flex column">
      <Header />
      <div className="main-container row">
        <SideNav />
        <Outlet />
      </div>
    </div>
  );
}
