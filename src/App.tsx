import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Header from './components/ui/Header/Header';
import { Baner } from './components/ui/Baner/Baner';
import Card from './components/ui/Card/Card';
import projects from './data/projects';
import { Articles } from './data/articles';
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

function AppContent() {
  const location = useLocation();
  const path = location.pathname;

  const getBannerData = () => {
    const projectMatch = path.match(/^\/projects\/([^/]+)/);
    if (projectMatch) {
      const projectId = projectMatch[1];
      const currentProject = projects.find(p => String(p.id) === projectId);
      return {
        title: currentProject ? currentProject.title : "Проект",
        image: currentProject ? currentProject.image : undefined,
        showButton: false
      };
    }
    const articleMatch = path.match(/^\/articles\/([^/]+)/);
    if (articleMatch) {
      const articleId = articleMatch[1];
      const currentArticle = Articles.find(a => String(a.id) === articleId);
      return {
        title: currentArticle ? currentArticle.title : "Статья",
        image: currentArticle ? currentArticle.img : undefined,
        showButton: false
      };
    }
    switch (path) {
      case '/':
        return { title: "Ваши идеи —<br />наши проекты", image: undefined, showButton: true };
      case '/catalog':
        return { title: "Каталог проектов", image: undefined, showButton: false };
      case '/favorites':
        return { title: "Избранные проекты", image: undefined, showButton: false };
      case '/articles':
        return { title: "Наш блог", image: undefined, showButton: false };
      case '/about':
        return { title: "О компании", image: undefined, showButton: false };
      case '/contacts':
        return { title: "Контакты", image: undefined, showButton: false };
      default:
        return null;
    }
  };

  const bannerData = getBannerData();
  const lastProjects = projects.slice(0, 8);

  const MainPage = () => (
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
        <Calculator />
      </div>
      <div className="section">
        <div className="container">
          <Form />
        </div>
        
      </div>
    </>
  );

  return (
    <>
      <Header />
      {bannerData && (
        <Baner 
          title={bannerData.title} 
          backgroundImage={bannerData.image} 
          showButton={bannerData.showButton} 
        />
      )}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/favorites' element={
          <div className="section">
            <div className="container">
              <h2 className='h2'>Избранное</h2>
              <Favorites />
            </div>
          </div>
        } />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contacts" element={<><Contacts /><Form /></>} />
        <Route path="/articles" element={<ArticleGrid />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
        <Route path="/about" element={<AboutCompany />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
      </Routes>
      
      <Footer />
    </>
  );
}
function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
