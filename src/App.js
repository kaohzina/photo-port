import React from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
function App() {
  return (
    // React.createElement("div", {props}, [array])
    // React.createElement("h1", {props}, "Ginger"),
    // React.createElement("p", {props}, "breed: Brittney Spaniel")
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
