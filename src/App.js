import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Cart from './components/Cart';
import { BrowserRouter, Route, Switch,Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Menu} />
        
        <Route exact path="/cart" component={Cart} />
        <Redirect to="/" component={Menu} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
