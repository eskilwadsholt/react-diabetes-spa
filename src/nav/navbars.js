import React from 'react';
import './navbars.css';

/*
class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        This is a test ...
      </div>
    );
  }
}*/

const Bars = {

  Top() {
    return (
      <div className="topbar">
        This is a test ...
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