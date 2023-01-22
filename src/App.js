
import React from 'react';
import "./App.css"
import Intro from './components/Intro';
import NavigationBar from './components/NavigationBar';
import Superhero from './components/Superhero';
import Trending from './components/Trending';
import "./style/LandingPage.css"
function App() {
// fungsi yang akan di render 
  return (
    <div>
      {/* intro section */}
    <div className='myBG'>
    <NavigationBar/>
    <Intro/>
   
    </div>
    {/* end of intro */}

   
    <div className='trending'>

     <Trending/>
    </div>

    <div className='superhero'>

<Superhero/>


    </div>
    
    </div>

  );
};


export default App;
