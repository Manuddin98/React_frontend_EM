
 
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import './App.css';
import {HashRouter as Router,Route,Routes} from 'react-router-dom';
import AddEmployeeComponent from './components/AddEmployeeComponent';

function App() {
  return (
    <div className="App">
      <Router>
       <HeaderComponent/>
       <div className='container'>
       
         <Routes>
          <Route exact path='/' Component={ListEmployeeComponent}></Route>
          <Route exact path='/employees' Component={ListEmployeeComponent}></Route>
          <Route exact path='/add-employee' Component={AddEmployeeComponent}></Route>
          <Route exact path='/edit-employee/:id' Component={AddEmployeeComponent}></Route>
        </Routes>


        

       </div>
     
       <FooterComponent/>
       </Router>
    </div>
  );
}

export default App;


