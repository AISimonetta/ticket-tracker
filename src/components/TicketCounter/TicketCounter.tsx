import './TicketCounter.scss'
import { useState } from 'react'

const TicketCounter = () => {

  const [ticket, setTicket] = useState(0);

//Decrement function
  const decrementIicket = () => {
    if (ticket > 0) {
      setTicket(ticket - 1);
    } else {
      setTicket(0);
    }
  };

  //Increment function
  const incrementTicket = () => {
    setTicket(ticket + 1);
  };

  return (
    <div className='counter'>
      <h4 className='counter__title'>Counter</h4>
      <div className='counter__ticket'>{ticket}</div>
      <div className='counter__buttons'>
          <button className='counter__add' onClick={decrementIicket}>-</button>
          <button className='counter__substract' onClick={incrementTicket}>+</button>
      </div>
    </div>
  )
}

export default TicketCounter