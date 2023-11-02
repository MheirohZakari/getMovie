import "./App.css";
import { GlobalStyle } from './GlobalStyle';
import Header from './Components/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Pages/home";              
import Movie from "./Pages/Movie";
import Notfound from "./Pages/Notfound";
// import login from "./Pages/login";
import Task from "./Components/Context/context";
import { CounterProvider } from "./Components/Context";
import { MoviesProvider } from "./contexts/moviesprovider";



function App() {
  return(
   <CounterProvider>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/cat/catfact" component={Task}/>
          <Route exact path="/:movieId" component={Movie} />
         <MoviesProvider>
           <Route exact path="/" component={Home} />
         </MoviesProvider> 
          
          {/* <Route exact path="/auth/login" component={login} /> */}
          <Route exact path="" component={Notfound} />
        
        </Switch>
      </Router>
       

        <GlobalStyle />
      </CounterProvider>
      )
}

      export default App;
