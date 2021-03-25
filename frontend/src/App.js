import React, { useEffect } from "react";
import './App.css';
import Homepage from './components/Homepage';

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init({
        duration: 900,
        once: true
    });
    AOS.refresh();
});

    return (
      <div className="App">
        <Homepage />
      </div>
    );
}

export default App;
