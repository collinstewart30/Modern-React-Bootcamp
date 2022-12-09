import logo from './logo.svg';
import './App.css';
import Dog from './Dog';

function App() {
  return (
    <div className="App">
      <Dog />
      <div>I am another div not in Dog</div>
    </div>
  );
}

export default App;
