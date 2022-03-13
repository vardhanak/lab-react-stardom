import './App.css';
import Data from './Components/Data';
import pos from "./prostars.json"

// import Stardom from '../src/Components/Stardom';

function App() {
  return (
    <div className="App">
          <Data data={pos}/>; {/* here Data is(Data.jsx) use to render on screen with the remaning parts... data={pos}   */}
          {/*React calls /return the Data component with {data: {pos}} as the props.  */}
    </div>
  );
}

export default App;