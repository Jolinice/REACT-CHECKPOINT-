import ColorSchemesExample from './components/navBar/navBar';
import './App.css';
import BasicExample2 from './components/cards/card3';
import BasicExample from './components/cards/card1';
import TextExample from './components/cards/card2';

function App() {
  return (
    <div className="App">
      <>
        <ColorSchemesExample/>
        <div className="card-container">
        <BasicExample/>
        <TextExample/>
        <BasicExample2/>
        </div>
      </>
    </div>
  );
}

export default App;
