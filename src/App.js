import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Header from './components/Header';
import FAQ from './pages/FAQ'
import Home from './pages/Home'
import Invest from './pages/Invest'
import Learn from './pages/Learn'
import Plan from './pages/Plan'
import Save from './pages/Save'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/plan">
                <Plan/>
              </Route>
              <Route path="/save">
                <Save/>
              </Route>
              <Route path="/invest">
                <Invest/>
              </Route>
              <Route path="/faq">
                <FAQ/>
              </Route>
              <Route path="/learn">
                <Learn/>
              </Route>
              <Route path="/signin">
                <Signin/>
              </Route>
              <Route path="/signup">
                <Signup/>
              </Route>
            </Switch>
          </div>
        </div>
    </Router>
    
  );
}

export default App;
