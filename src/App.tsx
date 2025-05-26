import { useState } from "react";
import "./App.css";
import { Button } from "src/components/Button";

export type AppProps = {
  children?: React.ReactNode;
};

function App() {
  const [count, setCount] = useState(0);
  <Button label="submit" />;
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
