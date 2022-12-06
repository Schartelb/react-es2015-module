import logo from './logo.svg';
import { Foods } from './foods';
import { getRandomFruit, removeFruit } from './helpers'
import './App.css';
import { useState } from 'react';

function App() {
  const fruit = removeFruit(Foods, getRandomFruit(Foods))
  return (
    <div className="App">
      <p>“I’d like one {fruit}, please.”</p>
      <p>“Here you go: {fruit}”</p>
      <p>“Delicious! May I have another?”</p>
      <p>“I’m sorry, we’re all out. We have {Foods.length} left.”</p>
    </div>
  );
}

export default App;
