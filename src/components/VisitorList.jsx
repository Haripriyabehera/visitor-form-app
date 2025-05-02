import React, { useContext } from "react";
import { VisitorContext } from "../context/VisitorContext";

const VisitorList = () => {
  const { visitors } = useContext(VisitorContext);

  return (
    <div className="list-container">
      <h3>Visitor Log</h3>
      {visitors.length === 0 ? (
        <p>No visitors yet.</p>
      ) : (
        <ul>
          {visitors.map((v, idx) => (
            <li key={idx}>
              <strong>{v.name}</strong> from Flat {v.flat} for {v.purpose} (📞 {v.mobile})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VisitorList;
