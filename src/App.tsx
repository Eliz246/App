import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/ui/Header/Header';
import Card from './components/ui/Card/Card';
import projects from './data/projects';
import { Favorites } from './components/ui/Favorites/Favorites';
import Calculator from './components/ui/Calculator/Calculator';
import Form from './components/ui/Form/Form';
import Footer from './components/ui/Footer/Footer';
function App() {
  const lastProjects = projects.slice(0,8);
  const MainPage = ()=>(
  <>
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
        <Calculator/>
      </div>
      <div className="section">
            <Form/>
      </div>
  </>
  );
  return (
  <Router>
    <Header></Header>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/favorites' element={
        <div className="section">
          <div className="container">
            <h2 className='h2'>Избранное</h2>
              <Favorites/>
          </div>
        </div>
      }/>
    </Routes>
    <Footer/>
  </Router> 
  );
}

export default App;