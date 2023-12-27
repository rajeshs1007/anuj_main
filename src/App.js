import React from "react";
import { Button } from "./components/Buttons";
import "./App.css"; // Import the CSS file with the container class

function App() {
  const link1 = "https://comparedata.vercel.app/";
  const link2 = " https://comparedynamicdata.vercel.app/";
  const link3 = "https://multipleompare.vercel.app/";

  return (
    <div className="App">
      <section>
      <b><i><p>This button we can use for the excel comparision</p><p>
           between the PORTFOLIO and DPholding</p></i></b>
      <a href={link1} target="_blank" rel="noopener noreferrer">
        <Button
          buttonStyle="btn--aquamarine  btn--medium --white"
          type="button"
        >
          Static Compare
        </Button>
      </a>
      </section>
      <section>
      <b><i><p>This button we can use for the Dynamic excel</p><p>
           comparision and show accordingly </p></i></b>
      <a href={link2} target="_blank" rel="noopener noreferrer">
        <Button
          buttonStyle="btn--aquamarine  btn--medium"
         
          type="button"
        >
          Dynamic Compare
        </Button>
      </a>
      </section>
       <section>
      <b><i><p>This button we can use for the excel comparision</p><p>
           between the PORTFOLIO and DPholding</p></i></b>
      <a href={link3} target="_blank" rel="noopener noreferrer">
        <Button
          buttonStyle="btn--aquamarine  btn--medium"
          
          type="button"
        >
          Multiple Compare
        </Button>
      </a>
      </section> 
    </div>
  );
}

export default App;
