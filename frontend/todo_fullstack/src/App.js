import "./App.css";
import AllRoutes from "./allroutes/Allroutes";
import Navbar from "./navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [name, setname] = useState("");

  const handelScroll = () => {
    const show = window.scrollY > 100;
    if (show) {
      setname("bgchange");
    } else {
      setname("App");
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", handelScroll);
    // console.log("hadnl scroll");
    return () => {
      document.removeEventListener("scroll", handelScroll);
    };
  }, [name]);
  console.log(name);

  return (
    <div className={name}>
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
