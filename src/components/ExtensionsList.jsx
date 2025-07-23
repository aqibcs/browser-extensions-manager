import React from 'react';
import ExtensionCard from "./ExtensionCard";


const ExtensionsList = ({ extensions, theme, onToggle, onRemove }) => {
    return (
        <div className="extensions-grid">
            {extensions.map((extension) => (
                <ExtensionCard
                    key={extension.name}
                    extension={extension}
                    theme={theme}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </div>
    );
};

export default ExtensionsList