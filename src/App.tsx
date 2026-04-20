import './index.css';
import Header from './components/ui/Header/Header';
import Card from './components/ui/Card/Card';
import houseImg from './images/house-isolated-field.jpg';

function App() {
  return (
  <>
    <Header></Header>
    <div className="container">
      <Card id='0' image={houseImg} title="Название проекта" area={100} floors={1} rooms={5}/>
    </div>
  </>
    
  )
}

export default App;