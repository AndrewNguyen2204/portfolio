import './App.css';
import "./components/FontAwesomeLibrary/FontAwesomeLibrary";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Menu from './pages/Menu/Menu';
import { MenuTemplate } from './templates/MenuTemplate/MenuTemplate';

export const history = createBrowserHistory();



function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path='/home' exact Component={Home} />
        <HomeTemplate path='/about' exact Component={About} />
        <HomeTemplate path='/portfolio' exact Component={Portfolio} />
        <HomeTemplate path='/contact' exact Component={Contact} />
        <MenuTemplate path='/menu' exact Component={Menu} />





        <HomeTemplate path='/' exact Component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
