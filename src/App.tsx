import './index.css';
import Header from './components/ui/Header/Header';
import Card from './components/ui/Card/Card';
import projects from './data/projects';
import { Favorites } from './components/ui/Favorites/Favorites';

function App() {
  const lastProjects = projects.slice(0,8);
  return (
  <>
    <Header></Header>
    <div className="section">
      <div className="container">
        <h2 className='h2'>Наши проекты</h2>
        <div className="card_wrapper">
          {lastProjects.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
    <div className="section">
      <div className="container">
        <h2 className='h2'>Избранное</h2>
        <div className="card_wrapper">
          <Favorites/>
        </div>
      </div>
    </div>
  </>
    
  )
}

export default App;