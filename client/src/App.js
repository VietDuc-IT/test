import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const handleClick = async () => {
    const res = await axios.post("http://localhost:5000/cookie", {
      withCredentials: true,
    });
    console.log(res.data);
  };

  return (
    <>
      <Button onClick={handleClick}>Click me</Button>
    </>
  );
}

export default App;
