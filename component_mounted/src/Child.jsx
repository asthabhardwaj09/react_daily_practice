import { useEffect } from "react";

function Child() {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return <h1>Hello React</h1>;
}

export default Child;