import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import { Button, ListGroup, ListGroupItem } from 'reactstrap'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';


function App(props) {
  return (
    <div className="App">
      <AppNavbar/>
      
      <ShoppingList/>
    </div>
  );
}

export default App;

