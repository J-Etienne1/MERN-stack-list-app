import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Button, ListGroup, ListGroupItem } from 'reactstrap'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Provider } from 'react-redux';
import store from './store';


function App(props) {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar/>
      <ShoppingList/>
    </div>
    </Provider>
  );
}

export default App;

