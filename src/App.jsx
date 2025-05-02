import { useState } from "react";
// import VisitorForm from "./components/VisitiorForm";
import VisitorForm from "./components/VisitiorForm";
import VisitorList from "./components/VisitorList";
import { VisitorProvider } from "./context/VisitorContext";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <VisitorProvider>
      <div className="app">
        <VisitorForm />
        <VisitorList />
      </div>
    </VisitorProvider>
  );
}

export default App;
