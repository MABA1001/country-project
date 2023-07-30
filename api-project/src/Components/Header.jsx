import React from "react";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between">
        <div>
          <h3 className="navbar-brand">Where in the World</h3>
        </div>
        <div>
          <h4> <i className="fa-regular fa-moon"></i><span>Toggle Mode</span></h4>
        </div>
      </div>
    </nav>
  );
}
