import './App.css';
import team from './data/team';
import EmployeeCards from './components/EmployeeCards/EmployeeCards';

function App() {

  return (
    <>
      <h1 className='main-title'> | TICKET TRACKER |</h1>
      <EmployeeCards />
    </>
  );
}

export default App;