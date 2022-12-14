import './header.css'
import { MdLocalHotel, MdPerson, MdOutlineEditCalendar, MdAirplaneTicket, MdDirectionsCarFilled, MdLocalTaxi } from "react-icons/md";
import { DateRange } from 'react-date-range'
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom';

function Header({ type }) {
  const [destination, setDestination] = useState('')
  const [toggleDate, setToggleDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

  const [toggleOptions, setToggleOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 2,
    children: 0,
    room: 1
  })

  const navigate = useNavigate()

  const handleOption = (name, operation) => {
    setOptions(prev => {
      return {
        ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  const handleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } })
  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
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
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Encontre sua pr??xima estadia</h1>
            <p className="headerDesc">Encontre ofertas em hot??is, casas, apartamentos e muito mais...</p>
            <button className="headerBtn">Sign in / Register</button>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <MdLocalHotel className='headerIcon' />
                <input onChange={e => setDestination(e.target.value)} type="text" placeholder="Where are you going?" className='headerSearchInput' />
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
                <span onClick={() => setToggleOptions(!toggleOptions)} className='headerSearchText'>{options.adult} adults {options.children} children {options.room} room</span>
                {toggleOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                        <button className="optionCounterButton" disabled={options.adult <= 1} onClick={() => handleOption("adult", "d")}>-</button>
                        <span className='optionCounterNumber'>{options.adult}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button className="optionCounterButton" disabled={options.children <= 0} onClick={() => handleOption("children", "d")}>-</button>
                        <span className='optionCounterNumber'>{options.children}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Room</span>
                      <div className="optionCounter">
                        <button className="optionCounterButton" disabled={options.room <= 1} onClick={() => handleOption("room", "d")}>-</button>
                        <span className='optionCounterNumber'>{options.room}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header