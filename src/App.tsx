import React, {useState} from 'react';


import './App.css';
import { LocationSearch } from './components/LocationSearch';
import { LocationTable } from './components/LocationTable';

function App() {


  const [locations, setLocations] = useState<string[]>([]);
  
  const addLocation =(location:string) => setLocations([location, ...locations]);

 

  return (
    <div className="container">
     <h2>Weather App</h2>
     <LocationSearch onSearch={addLocation} />
     <LocationTable locations={locations}/>
   </div>
  );
}

export default App;
