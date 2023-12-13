import './App.css'
import EmployeeCards from './components/EmployeeCards/EmployeeCards';
import SearchButton from './components/SearchButton/SearchButton'



function App() {
  return (
    <>
    <h1 className='main-title'>TICKET TRACKER</h1>

    <SearchButton/>
    <EmployeeCards  />
    </>
  )
}

export default App
