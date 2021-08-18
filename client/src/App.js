import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';

function App() {
  return (
    <div>
      <Router>
        <Main path="/" />
        <Create path="/create" />
        <Edit path="/:id/update" />
      </Router>
    </div>
  );
}

export default App;
