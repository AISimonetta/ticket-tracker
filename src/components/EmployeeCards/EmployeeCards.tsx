import './EmployeeCards.scss';
import team from '../../data/team';
import TicketCounter from '../TicketCounter/TicketCounter';

type EmployeeCardsProps = {
  id: number;
  name: string;
  role: string;
};

const EmployeeCards = ({ id, name, role }: EmployeeCardsProps) => {

  const coworkers = team.map((coworker) => (
    <div key={coworker.id} >
      <div className='card__container'>
          <div className='card__name'>{coworker.name.toUpperCase()}</div>
          <div className='card__role'>{coworker.role}</div>
          <TicketCounter/>
      </div>
    </div>
  ));

  return <div className='cards'>{coworkers}</div>;
};

export default EmployeeCards;
