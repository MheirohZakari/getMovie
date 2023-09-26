import "./App.css";
import { GlobalStyle } from './GlobalStyle';
import Header from './Components/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Pages/home";
import Movie from "./Pages/Movie";
import Notfound from "./Pages/Notfound";
// import login from "./Pages/login";
import Facts from "./Components/facts";




function App() {
  return(
   <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/cat/catfact" component={Facts}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/:movieId" component={Movie} />
          {/* <Route exact path="/auth/login" component={login} /> */}
          <Route exact path="" component={Notfound} />
        
        </Switch>
      </Router>
       

        <GlobalStyle />
      </>
      )
}

      export default App;
