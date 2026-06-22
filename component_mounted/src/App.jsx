import { useState } from "react";
import Child from "./Child";

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <button onClick={() => setShow(!show)}>
        Toggle Component
      </button>

      {show && <Child />}
    </>
  );
}

export default App;