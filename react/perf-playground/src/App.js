import { useState } from "react";

const Child = () => {
  return <div style={{ border: "1px solid" }}>child</div>;
};

const Parent = ({ children }) => {
  const [state, setState] = useState(true);
  return (
    <div style={{ padding: "8px" }}>
      {children}
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        click
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Parent>
        <Child />
      </Parent>
    </div>
  );
};

export default App;
