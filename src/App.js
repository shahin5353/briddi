import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import ContentPage from './Pages/ContentPage/ContentPage';


function App() {
  return (
  <Router>
     <Header/>
     <Switch>
       <Route exact path="/" component={ContentPage}/>
     </Switch>
  </Router>
  );
};
export default App;
