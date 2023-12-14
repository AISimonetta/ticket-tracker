import './App.css';
import team from './data/team';
import EmployeeCards from './components/EmployeeCards/EmployeeCards';

function App() {
  return (
    <>
      <h1 className='main-title'> | TICKET TRACKER |</h1>
      <div className='cards'>
        {team.map((employee) => (
          <EmployeeCards key={employee.id} name={employee.name} role={employee.role} />
        ))}
      </div>
    </>
  );
}

export default App;