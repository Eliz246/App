import './index.css'
import Header from './components/ui/Header/Header';
import Card from './components/ui/Card/Card';
function App() {
  return (
  <>
    <Header></Header>
    <Card id='0' image='./images/house-isolated-field.jpg' title="название проекта" area={100} floors={1} rooms={5}/>
  </>
    
  )
}

export default App;