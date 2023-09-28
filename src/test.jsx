import React, { useState } from 'react';
import Button from './components/Button';

const Test = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then(response => response.json())
      .then(data => setJoke(data.joke))
      .catch(error => console.error(error));
  };

  return (
    <div className=''>
    <div className='text-white text-xl text-center px-10'> <p className='px-5'> <i> {joke}</i> </p></div>
     <div className='flex justify-center'> <Button onClick={fetchJoke}  /></div> 
      
      {joke !== "" && <p className='text-center'></p>}
      {/**marche comme ça si on fait pas de component de button 
       * <div><button onClick={fetchJoke}> </button></div>*/}
    </div>
    
  );
};

export default Test;
