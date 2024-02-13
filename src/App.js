
import './App.css';
import Counter from './components/counter/Counter'
function App() {
  return (
    <div className="App">
        <Counter/>
    </div>
  );
}


function counterProps({prop1, prop2}) {
    return (
        <div>Prop</div>
    )
}

export default App;
