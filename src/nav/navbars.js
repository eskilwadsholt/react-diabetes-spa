import React from 'react';
import './navbars.css';
import logo from './screenshot-32x32';

const Bars = {

  Top() {
    let dia = [];
    [..."DIA"].forEach(element => {
      dia.push(<div className="dia" key={element}>{element}</div>);
    });
    let cast = [];
    [..."CAST"].forEach(element => {
      cast.push(<div className="cast" key={element}>{element}</div>);
    });
    return (
      <div className="topbar">
        <img src={logo} alt="L" className="logo"/>
        {dia}{cast}
      </div>
    );
  },
  
  Bottom() {
    return (
      <div className="bottom-bar">
        Testing bottom ...
      </div>
    )
  }
}


export default Bars;