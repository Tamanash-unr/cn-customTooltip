import './App.css';
import Tooltip from './Tooltip';

// Main App Element to be 
function App() {
  return (
    <div className="sample-text">
      Hello you can - &nbsp;
        <Tooltip position="left">
          <span><u>Hover Over Me !</u></span>
        </Tooltip>
    </div>
  );
}

export default App;
