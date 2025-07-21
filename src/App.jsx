import React, { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Header theme={theme} onThemeToggle={handleToggleTheme} />
      </div>
    </div>
  );
}

export default App;
