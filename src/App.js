
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { PublicRoute } from './Routes/PublicRoute';

function App() {
  return (
    <div className="App">
      <Nav/>
     <Routes>
     {
        PublicRoute.map(({path, Component}, index)=>(
          <Route key={index} path={path} element={<Component/>} />
        ))
      }
     </Routes>
    </div>
  );
}

export default App;
