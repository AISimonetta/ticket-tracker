import './EmployeeCards.scss';
import TicketCounter from '../TicketCounter/TicketCounter';

type EmployeeCardsProps = {
  name: string;
  role: string;
};

const EmployeeCards = ({ name, role }: EmployeeCardsProps) => (
      <div className='card__container'>
        <div className='card__name'>{name.toUpperCase()}</div>
        <div className='card__role'>{role}</div>
        <TicketCounter />
      </div>
);

export default EmployeeCards;