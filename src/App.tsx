import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Header from './components/ui/Header/Header';
import Card from './components/ui/Card/Card';
import projects from './data/projects';
import { Favorites } from './components/ui/Favorites/Favorites';
import Calculator from './components/ui/Calculator/Calculator';
import Form from './components/ui/Form/Form';
import Footer from './components/ui/Footer/Footer';
import Catalog from './components/ui/Catalog/Catalog';
import Contacts from './components/ui/Contacts/Contacts';
import { ThemeProvider } from './components/ui/Theme/Theme';
import { ArticleGrid } from './components/ui/Article/Article';
import { ArticlePage } from './components/ui/ArticlePage/ArticlePage';
import { AboutCompany } from './components/ui/AboutCompany/AboutCompany';
import { ProjectPage } from './components/ui/ProjectPage/ProjectPage';

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
    <ThemeProvider>
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
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contacts" element={<><Contacts /><Form/></>} />
          <Route path="/articles" element={<ArticleGrid/>}/>
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/about" element={<AboutCompany/>}/>
          <Route path="/projects/:id" element={<ProjectPage/>}/>
        </Routes>
        <Footer/>
      </Router>
   </ThemeProvider>
  );
}

export default App;