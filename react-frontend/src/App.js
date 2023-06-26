import logo from './logo.svg';
import './App.css';
import ListEmployeeComponent from './Component/ListEmployeeComponent';
import HeaderComponent from './Component/HeaderComponent';
import FooterComponent from './Component/FooterComponent';
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom/cjs/react-router-dom.min';
import CreateEmployeeComponent from './Component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './Component/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Component/ViewEmployeeComponent';
function App() {
  return (
    <div>
      <Router>  
        <HeaderComponent/>
          <div className='container'>
            <Switch>
              <Route path = '/' exact component = {ListEmployeeComponent} ></Route>
              <Route path = '/employees' component = {ListEmployeeComponent} ></Route>
              <Route path = '/add-employee/:id' component = {CreateEmployeeComponent} ></Route>
              <Route path = '/view-employee/:id' component = {ViewEmployeeComponent} ></Route>
              {/* <Route path = '/update-employee/:id' component = {UpdateEmployeeComponent} ></Route> */}
            </Switch>
          </div>
        <FooterComponent />
      </Router>
      
      
      
      
    </div>
    
  );
}

export default App;
