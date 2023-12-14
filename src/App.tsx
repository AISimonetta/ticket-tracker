import { useState, FormEvent } from 'react';
import './App.css';
import team from './data/team';
import FilterName from './components/FilterName/FilterName';
import EmployeeCards from './components/EmployeeCards/EmployeeCards';

function App() {
  const [searchName, setSearchName] = useState('');

  const handleSearchByNameInput = (event: FormEvent<HTMLInputElement>) => {
    const nameInput = event.currentTarget.value.toLowerCase();
    setSearchName(nameInput);
  };

  const filteredEmployeed = team.filter((employee) =>
  employee.name.toLowerCase().includes(searchName)
);

  return (
    <>
      <h1 className='main-title'> | TICKET TRACKER |</h1>
      <FilterName searchName={searchName} onChange={handleSearchByNameInput} />
      <div className='cards'>
        {filteredEmployeed.map((employee) => (
          <EmployeeCards
              key={employee.id}
              name={employee.name}
              role={employee.role} 
          />
        ))}
      </div>
    </>
  );
}

export default App;