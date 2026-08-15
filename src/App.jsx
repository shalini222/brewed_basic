import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'



 function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-background)",
        color: "var(--color-text)",
        padding: "40px",
      }}
    >
      <h1
        style={{
          color: "var(--color-primary)",
          fontFamily: "var(--font-heading)",
        }}
      >
        Brewed Lite
      </h1>

      <p style={{ fontFamily: "var(--font-body)" }}>
        Your reusable restaurant platform.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          background: "var(--color-primary)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
        }}
      >
        Test Theme
      </button>
    </div>
  );
}

export default App;       
