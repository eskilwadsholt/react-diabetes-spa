import React from 'react';
import './navbars.css';
import logo from './screenshot-32x32';

class Topmenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  toggleOpen() {
    const open = this.state.isOpen;
    this.setState({
      isOpen: !open,
    });
  }
  render() {
    const classNames = "top-menu" + (this.state.isOpen ? " open" : "");
    return (
      <div className={classNames}
        onClick={() => this.toggleOpen()}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
    );
  }
}

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
        <div className="title">{dia}{cast}</div>
        <Topmenu/>
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