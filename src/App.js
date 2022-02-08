import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import AddBanner from './components/Pages/AddBanner/AddBanner';

function App() {
  return (
    <div className="App">
        <Router>
            <Header></Header>
            <Switch>
              <Route  exact path="/">
                <Home></Home>
              </Route>
              <Route path="/Home">
                <Home></Home>
              </Route>
              <Route path="/addBanner">
                <AddBanner></AddBanner>
              </Route>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;