import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main style={{ padding: "40px" }}>
        <h1>Brewed Lite</h1>
        <p>Reusable restaurant platform.</p>
      </main>
    </>
  );
}

export default App;


