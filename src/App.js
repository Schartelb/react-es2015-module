import React from 'react';
import { Choice, Remove } from "./helpers"
import Foods from "./foods"


function App() {
  const food = Choice(Foods)
  return (
  <div>
    <p>
      “I’d like one {food}, please.”
    </p>
    <p>
      “Here you go: {Remove(food)}”
    </p>
    <p>
      "Delicious! May I have another?"
    </p>
    <p>
      "I’m sorry, we’re all out. We have {Foods.length} left."
    </p>
  </div>)
}

export default App;
