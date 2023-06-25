import './App.css';
import Tooltip from './Tooltip';

// Main App Element to be rendered on page
function App() {
  return (
    <div className="sample-text">
      Hello you can - &nbsp;
        {/* Tooltip Component with Position as Prop. Positions can be Top, Left, Bottom, Right */}
        <Tooltip position="left">
          {/* Hover Element being sent as Child to Tooltip */}
          <span><u>Hover Over Me !</u></span>
        </Tooltip>
    </div>
  );
}

export default App;
