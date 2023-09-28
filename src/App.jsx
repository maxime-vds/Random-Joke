import "./App.css";
import rire from "./assets/rire.jpg";
import Button from "./components/Button";
import Test from "./test";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-yellow-400 text-2xl bg-gradient-to-r from-purple-600 to-pink-300 p-10 text-center underline">
        <b> <i>RANDOM JOKE  </i>  </b>
      </h1>
      <div>
        <div className="flex flex-col items-center justify-center pt-14 lg:flex-row lg:justify-center">
          <img src={rire} className="h  rounded-xl opacity-60 lg:h-96" alt="" />
          
            <Test />
          
        </div>
      </div>
      <footer className='font-sherif text-sm text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 w-full bottom-0 absolute md:text-base'>
        <i>created by student @BeCode 2023.</i>
      </footer>
    </div>
  );
}

export default App;




/* code de la page copier pour avoir plus facile pour modifier le code 


import './App.css'
import rire from './assets/rire.jpg'
import Button from './components/Button'

function App() {
  

  return (
  <div className="app">
        <div className="contain h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  ">
        <div className="text-center p-12 px-4">
          <div className='text-slate-800 px-12 p-6'> 
            <h1 className='border border-solid border-slate-800 bg-yellow-200 rounded-xl px-12 m-2'>
              Welcome on this Random Joke page !
            </h1> 
          </div>
        </div>
        
        <div className='flex justify-center'>
          <img src={rire} className="w-80 rounded-xl" alt="" />
        </div>
        <h1></h1><br />
        <div className='flex justify-center p-5'><button className='border border-black  rounded-full justify-center text-3xl bg-red-700 px-5 p-3 hover:bg-red-400'> Next Joke </button> </div>
       
       
       <br /> <div className='flex justify-center'> <Button/> </div>

      </div>
  </div>
    
  )
}

export default App


 */
