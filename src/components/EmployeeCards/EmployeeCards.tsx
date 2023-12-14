import './EmployeeCards.scss';
import TicketCounter from '../TicketCounter/TicketCounter';

type EmployeeCardsProps = {
  name: string;
  role: string;
};

const EmployeeCards = ({ name, role }: EmployeeCardsProps) => (
  <div className='cards'>
      <div className='card__container'>
        <div className='card__name'>{name}</div>
        <div className='card__role'>{role}</div>
        <TicketCounter />
      </div>
  </div>
);

export default EmployeeCards;