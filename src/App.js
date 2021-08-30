import React,{useState} from 'react';
import reactDom from 'react-dom';
import './App.css';
import { Dialog } from './Components/Dialog';
import { Home } from './Components/Home';

function App() {
  const [isOpen, setIsOpen]= useState(false)

  return (
    <React.Fragment>
      <Home setIsOpen={setIsOpen}/>
      {reactDom.createPortal(<Dialog isOpen={isOpen} setIsOpen={setIsOpen}/>, document.getElementById("portal"))}
    </React.Fragment>
  );
}

export default App;
