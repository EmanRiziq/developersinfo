import './App.css';
import { useReducer } from 'react';

import DeveloperList from './omponents/DeveloperList'
import DeveloperForm from './omponents/DeveloperForm';
import { devReducer } from './reducers/devReducer';

function App() {
  const [devs, dispatch] = useReducer(devReducer, []);
  return (
    <div className="App">
      <DeveloperForm dispatch={dispatch}/>
      <DeveloperList devList={devs} dispatch={dispatch}/>
    </div>
  );
}

export default App;
