import './EmployeeCards.scss';
import team from '../../data/team';
import TicketCounter from '../TicketCounter/TicketCounter';

type CoworkerCardsProps = {
  id: number;
  name: string;
  role: string;
};

const CoworkerCards = ({ id, name, role }: CoworkerCardsProps) => {

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

export default CoworkerCards;
