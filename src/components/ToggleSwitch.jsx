const ToggleSwitch = ({ isActive, onToggle, theme }) => {
    return (
        <div
        className={`toggle-switch ${isActive ? "active" : ""}`}
        onClick={onToggle}
        >
        <div className="toggle-slider"></div>
        </div>
    );
};

export default ToggleSwitch;
