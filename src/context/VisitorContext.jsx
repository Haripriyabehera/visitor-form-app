import React, { createContext, useState } from "react";

export const VisitorContext = createContext();

export const VisitorProvider = ({ children }) => {
  const [visitors, setVisitors] = useState(() => {
    const saved = localStorage.getItem("visitors");
    return saved ? JSON.parse(saved) : [];
  });

  const addVisitor = (visitor) => {
    const updated = [visitor, ...visitors];
    setVisitors(updated);
    localStorage.setItem("visitors", JSON.stringify(updated));
  };

  return (
    <VisitorContext.Provider value={{ visitors, addVisitor }}>
      {children}
    </VisitorContext.Provider>
  );
};
