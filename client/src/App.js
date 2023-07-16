import './App.css';
import Btn from './components/Btn';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Btn  buttonText="Click me!"/>
    </div>
  );
}

export default App;