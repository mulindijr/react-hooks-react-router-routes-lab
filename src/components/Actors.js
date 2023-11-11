import React from "react";
import { actors } from "../data";

function Actors() {
  const eachactor = actors.map((actors)=> (
    <div key={actors.name}>
    <h2> Name:{actors.name}</h2>
    <p>Movies:</p>
    <ul>
     {actors.movies.map((movies, index)=>(
     <li key={index}>{movies} </li>
     ))}

    </ul>

   </div>

 ))

 return <div>
   <h1>Actors Page {eachactor}</h1>
     
 </div>;

}

export default Actors;