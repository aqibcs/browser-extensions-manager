import React from 'react'

const Header = ({ theme, onThemeToggle }) => {
    return (
        <header className={`header ${theme}`}>
            <div className="header-left">
                <div className="logo">
                    <img src="/assets/images/logo.svg" alt="Extensions Logo"
                        style={{
                            width: "160px",
                            height: "auto",
                            filter: theme === "dark" ? "invert(1)" : "none",
                        }}
                        onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = `<span style="color ${
                                theme === "dark" ? "white" : "black"
                            };"></span>`;
                        }} 
                    />
                </div>
            </div>
            <button
                className={`theme-toggle ${theme}`}
                onClick={onThemeToggle}
                aria-label='Toggle theme'
                style={
                    theme === "dark"
                        ? {
                            backgroundColor: "white",
                            borderRadius: "0.75rem",
                            padding: "6px",
                        }
                    : {}
                }
                >
                    <img
                        src={
                            theme === "light"
                                ? "/assets/images/icon-moon.svg"
                                : "/assets/images/icon-sun.svg"
                        }
                        alt={
                            theme === "light"
                        }
                        style={
                            theme === "dark"
                                ? { width: "20px", height: "20px", filter: "invert(0.2)" }
                                : { width: "20px", height: "20px" }
                        }
                        onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.innerHTML = theme === "light" ?  "🌙" : "☀️";
                        }}
                    />
                </button>
        </header>
    );
};

export default Header