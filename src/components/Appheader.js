import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Appheader = () => {
  const [displayusername, displayusernameupdate] = useState("");
  const [showmenu, showmenuupdateupdate] = useState(false);
  const usenavigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      showmenuupdateupdate(false);
    } else {
      showmenuupdateupdate(true);
      let username = sessionStorage.getItem("username");
      if (username === "" || username === null) {
        usenavigate("/login");
      } else {
        displayusernameupdate(username);
      }
    }
  }, [location]);

  const handleLogout = () => {
    // Clear session storage and navigate to the login page
    sessionStorage.clear();
    usenavigate("/login");
  };

  return (
    <div>
      {showmenu && (
        <div className="header" style={{ background: "#ff533a", padding: "10px", borderBottom: "1px solid #e2e2e2", position: "relative" }}>
          <div style={{ marginLeft: "40px", float: "left", fontSize: "18px", color: "#fff", fontWeight: "bold" }}>
            Halo, <b>{displayusername}</b>
          </div>
          <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", fontSize: "16px", color: "#fff", fontWeight: "bold" }}>
            Country List
          </div>
          <Link to={"/User"} style={{ float: "right", textDecoration: "none", transform: "translateX(-50%)", fontSize: "16px", color: "#fff", fontWeight: "bold" }}>
            Management User
          </Link>
          <Link to={"#"} onClick={handleLogout} style={{ fontSize: "14px", color: "#fff", textDecoration: "none", marginLeft: "12px", fontWeight: "bold" }}>
            (Logout)
          </Link>
        </div>
      )}
    </div>
  );
};

export default Appheader;