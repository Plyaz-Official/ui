import { useState } from "react";
import "./App.css";

export type AppProps = {
  children?: React.ReactNode;
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <button
        data-testid="count-button"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
    </div>
  );
}

export default App;
