import './EmployeeCards.scss';
import TicketCounter from '../TicketCounter/TicketCounter';
import team from '../../data/team';

type EmployeeCardsProps = {
  id: number;
  name: string;
  role: string;
};

const EmployeeCards = ({ id, name, role }: EmployeeCardsProps) => {

  const employees = team.map((employee) => (
    <div key={employee.id} >
      <div className='card__container'>
          <div className='card__name'>{employee.name.toUpperCase()}</div>
          <div className='card__role'>{employee.role}</div>
          <TicketCounter/>
      </div>
    </div>
  ));

  return <div className='cards'>{employees}</div>;
};

export default EmployeeCards;
