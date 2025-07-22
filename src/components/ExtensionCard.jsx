import ToggleSwitch from "./ToggleSwitch";

const ExtensionCard = ({ extension, theme, onToggle, onRemove }) => {
  return (
    <div className={`extension-card ${theme}`}>
      <div className="card-header">
        <div className="extension-icon">
          <img
            src={extension.logo || "/placeholder.svg"}
            alt={`${extension.name} icon`}
            style={{
              filter:
                (!extension.logo || extension.logo === "/placeholder.svg") &&
                theme === "dark"
                  ? "invert(1)"
                  : "none",
            }}
            onError={(e) => {
              e.target.src = "/placeholder.svg";
            }}
          />
        </div>
        <div className="extension-info">
          <h3 className="extension-name">{extension.name}</h3>
          <p className="extension-description">{extension.description}</p>
        </div>
      </div>

      <div className="card-footer">
        <button
          className={`remove-btn ${theme}`}
          onClick={() => onRemove(extension.name)}
        >
          Remove
        </button>
        <ToggleSwitch
          isActive={extension.isActive}
          onToggle={() => onToggle(extension.name)}
          theme={theme}
        />
      </div>
    </div>
  );
};

export default ExtensionCard;
