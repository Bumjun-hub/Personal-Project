import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="pm-header">
      <div className="pm-header-inner">
        <span className="pm-logo">Project M</span>
      </div>
    </header>
  );
};

export default Header;
