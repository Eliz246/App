import './index.css';
import Header from './components/ui/Header/Header';
import Card from './components/ui/Card/Card';
import houseImg from './images/house-isolated-field.jpg';

function App() {
  return (
  <>
    <Header></Header>
    <div className="product-card">
      <div className="container">
      <h2 className='h2'>Наши проекты</h2>
      <div className="card_wrapper">
        <Card id='0' image={houseImg} title="Название проекта" area={100} floors={1} rooms={5}/>
        <Card id='1' image={houseImg} title="Название проекта" area={100} floors={1} rooms={5}/>
        <Card id='2' image={houseImg} title="Название проекта" area={100} floors={1} rooms={5}/>
        <Card id='3' image={houseImg} title="Название проекта" area={100} floors={1} rooms={5}/>
        <Card id='4' image={houseImg} title="Название проекта" area={100} floors={1} rooms={5}/>
        <Card id='5' image={houseImg} title="Название проекта" area={100} floors={1} rooms={5}/>
        <Card id='5' image={houseImg} title="Название проекта" area={100} floors={1} rooms={5}/>
        <Card id='5' image={houseImg} title="Название проекта" area={100} floors={1} rooms={5}/>
      </div>
      </div>
    </div>
  </>
    
  )
}

export default App;