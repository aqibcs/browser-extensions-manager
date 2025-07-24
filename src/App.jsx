import React, { useState } from "react";
import Header from "./components/Header";
import FilterButtons from "./components/FilterButtons";
import ExtensionsList from "./components/ExtensionsList";
import useExtensions from "./hooks/useExtensions";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");
  const [activeFilter, setActiveFilter] = useState("All");

  const {
    loading,
    error,
    toggleExtension,
    removeExtension,
    getFilteredExtensions,
  } = useExtensions();

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const filteredExtensions = getFilteredExtensions(activeFilter);

  if (loading) {
    return (
      <div className={`app ${theme}`}>
        <div className="container">
          <div style={{ textAlign: "center", padding: "50px" }}>
            Loading extensions...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`app ${theme}`}>
        <div className="container">
          <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
            Error: {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`app ${theme}`}>
      <div className="container">
        <Header theme={theme} onThemeToggle={handleThemeToggle} />

        <div className="main-content">
          <h2 className="page-title">Extensions List</h2>
          <FilterButtons
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            theme={theme}
          />
        </div>

        <ExtensionsList
          extensions={filteredExtensions}
          theme={theme}
          onToggle={toggleExtension}
          onRemove={removeExtension}
        />
      </div>
    </div>
  );
};

export default App;
