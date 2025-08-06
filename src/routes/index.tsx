import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center bg-[#282c34] text-white text-[calc(10px+2vmin)]">
        <h1 className="text-4xl font-bold">Gabriel V. Santana</h1>
        <p>It's coming...</p>
        <p>Count: {count}</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Add +1
        </button>
      </header>
    </div>
  );
}
