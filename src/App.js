import './App.css';
import Bars from './nav/navbars.js';
import Bodys from './content/bodys.js';

function App() {
  return (
    <div className="App">
      <Bars.Top />
      <Bodys.Main />
      <Bars.Bottom />
    </div>
  );
}

export default App;
