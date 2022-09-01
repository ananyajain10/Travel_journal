import './App.css';
import Header from './components/header'
import Card from './components/card'
import Data from './components/data'
function App() {
  const map1 = Data.map(item => {
    return <Card
            item = {item}
            />
  
  })
  return (
    <div className="App">
      <Header/>
      
      {map1}
      
    </div>
  );
}

export default App;
