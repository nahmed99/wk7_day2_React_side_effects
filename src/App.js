import {useEffect, useState} from 'react';

import './App.css';


// TASK: 10 mins: Make a component with a number in state that has a button to increment and another button to 


function App() {

  const [number, setNumber] = useState(0);
  const [numberLarge, setNumberLarge] = useState(0);

  useEffect(() => {
    // This useEffect is triggered whenever any of the states 
    // change - one trigger for each state that changes (i.e., 
    // for each time a 'setSomething' is called, e.g., setNumber and setNumberLarge below).
    console.log("All of the state has changed");
    setNumberLarge(number * 2);
  });



  const handleFormIncrement = () => {

    // The order of the 'sets' below is NOT gauranteed, therefore, the
    // updates might not work properly - they will get out of sync very 
    // quickly...this is scenario where useEffect would work to the intended
    // specification...
      setNumber(number + 1);
     /* setNumberLarge(number * 2); */

  }

  const handleFormDecrement = () => {
      setNumber(number - 1);
     /* setNumberLarge(number * 2); */
  }


  return (
    <div>
      <h1>Kidda?</h1>
      <p>The Number is now: {number}</p>
      <p>The Large Number is now: {numberLarge}</p>
      <button onClick={handleFormIncrement}>Increment</button>
      <button onClick={handleFormDecrement}>Decrement</button>
    </div>

  );
}

export default App;
