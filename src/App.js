import Friendsrfrl from "./Friendsrfrl";
import Refer from "./Refer";
import React  from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path='/' element={<Friendsrfrl/>}/>
          <Route path='/frndsrfl' element={<Friendsrfrl/>}/>
          <Route path='/rfr' element={<Refer/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
