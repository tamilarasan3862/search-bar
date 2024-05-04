import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Searchbar from './Search-bar';
import Searchiterms from './Searchiterms.js';
function App() {
  const [arr,setarr]=useState([]);
  return (
   <div className="container">
    <Searchbar setarr={setarr}/>
    <Searchiterms arr={arr}/>
   </div>
  );
}

export default App;
