import { useState, useEffect } from "react";

const useExtensions = () => {
    const [extensions, setExtensions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchExtensions();
    }, []);

    const fetchExtensions = async () => {
        try {
            setLoading(true);
            const response = await fetch("data.json");
            if (!response.ok) {
                throw new Error("Failed to fetch extensions");
        }
            const data = await response.json();
            setExtensions(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const toggleExtension = (name) => {
        setExtensions((prev) =>
        prev.map((ext) =>
            ext.name === name ? { ...ext, isActive: !ext.isActive } : ext
        )
        );
    };

    const removeExtension = (name) => {
        setExtensions((prev) => prev.filter((ext) => ext.name !== name));
    };

    const getFilteredExtensions = (filter) => {
        switch (filter) {
        case "Active":
            return extensions.filter((ext) => ext.isActive);
        case "Inactive":
            return extensions.filter((ext) => !ext.isActive);
        default:
            return extensions;
        }
    };

    return {
        extensions,
        loading,
        error,
        toggleExtension,
        removeExtension,
        getFilteredExtensions,
    };
};

export default useExtensions;
