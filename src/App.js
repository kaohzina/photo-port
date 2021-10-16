import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery";

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);
  return (
    // React.createElement("div", {props}, [array])
    // React.createElement("h1", {props}, "Ginger"),
    // React.createElement("p", {props}, "breed: Brittney Spaniel")
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}>
      </Nav>
      <main>
        <div>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;
