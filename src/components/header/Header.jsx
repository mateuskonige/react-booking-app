import './header.css'
import { MdLocalHotel, MdPerson, MdOutlineEditCalendar, MdAirplaneTicket, MdDirectionsCarFilled, MdLocalTaxi } from "react-icons/md";
import { DateRange } from 'react-date-range'
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'

function Header() {
  const [toggleDate, setToggleDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerList">
          <div className="headerListItem active">
            <MdLocalHotel />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <MdAirplaneTicket />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <MdDirectionsCarFilled />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <MdLocalHotel />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <MdLocalTaxi />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className="headerTitle">Encontre sua próxima estadia</h1>
        <p className="headerDesc">Encontre ofertas em hotéis, casas, apartamentos e muito mais...</p>
        <button className="headerBtn">Sign in / Register</button>
        <div className="headerSearch">
          <div className="headerSearchItem">
            <MdLocalHotel className='headerIcon' />
            <input type="text" placeholder="Where are you going?" className='headerSearchInput' />
          </div>
          <div className="headerSearchItem">
            <MdOutlineEditCalendar className='headerIcon' />
            <span onClick={() => setToggleDate(!toggleDate)} className='headerSearchText'>{format(date[0].startDate, 'dd/MM/yyyy')} to {format(date[0].endDate, 'dd/MM/yyyy')}</span>
            {toggleDate && (<DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />)}
          </div>
          <div className="headerSearchItem">
            <MdPerson className='headerIcon' />
            <span className='headerSearchText'>2 adults 2 children 1 room</span>
          </div>
          <button className="headerBtn">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Header