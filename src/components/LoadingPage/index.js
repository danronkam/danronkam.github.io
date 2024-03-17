import React, { useEffect, useState } from "react";
import "./LoadingPage.css"; // Import CSS file for styling

const LoadingPage = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="loading-page">
      {loading ? (
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <div>Loading...</div>
        </div>
      ) : (
        children 
      )}
    </div>
  );
};

export default LoadingPage;
