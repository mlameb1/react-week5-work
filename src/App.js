import React from "react";
import Weather from "./Weather";
import './App.css';


export default function App() {
return (
    <div className="App">
      <div className="container">

<Weather defaultCity = {"Paris"}/>
<footer>
<p>Coded by E Mlambo</p>
         <a
          className="App-link"
          href="https://github.com/mlameb1/react-week5-work"
          target="_blank"
          rel="noopener noreferrer"
        >
         open-sourced GitHub link
        </a>

        
</footer>
</div>
    </div>
  );
}

