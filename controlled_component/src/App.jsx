import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  console.log("State Value:", name);

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}

export default App;

//-----------------------------

// import { useRef } from "react";

// function App() {
//   const inputRef = useRef();

//   const handleClick = () => {
//     console.log("Input Value:", inputRef.current.value);
//   };

//   return (
//     <>
//       <input type="text" ref={inputRef} />
//       <button onClick={handleClick}>Check Value</button>
//     </>
//   );
// }

// export default App;