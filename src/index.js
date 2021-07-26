import React from 'react';
import ReactDOM from 'react-dom';
import bg from './assets/ocean.jpg';
import './styles.css';

// import App from './App';
import { animals } from './animals';
import reportWebVitals from './reportWebVitals';
const title= " ";
//  backgroundimg:url("./assets/ocean.jpg");
const background=(<img className="background" alt ="ocean"src={bg}/>)
const showbackground=true;
const images=[];
for(const animal in animals) {
  images.push(
    <img
    key={animal}
    className="animal"
    alt={animal}
    src= {animals[animal].image}
    aria-label= {animal}
    role= 'button'
    onClick={displayFact}
    />
  )
}
function displayFact(e) {
  const selectedAnimal= e.target.alt;
  const animalinfo=animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalinfo.facts.length);
  const funFact=animalinfo.facts[optionIndex];
  document.getElementById('fact').innerHTML= funFact;
}

const animalFacts = (
  <div>
  <h1>{title===" " ? "Click an animal for a fun fact":title} </h1>
  {showbackground && background}
  
  <div className='animals'>
  {images}
  </div>
  <p id='fact'></p>
</div>)

  ReactDOM.render(animalFacts ,
    document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
