import './searchItem.css'

function SearchItem() {
  return (
    <div className="searchItem">
      <img className='siImg' src="https://images.unsplash.com/photo-1548495010-83f5578e1f03?q=100&fm=jpg&w=500&fit=max" alt="" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDestance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">Entire Studio - 1 bathroom - 21m² 1 full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$123</span>
          <div className="siTaxOp">Includes taxes and</div>
          <button className="siCheckButton">See available</button>
        </div>
      </div>
    </div>
  )
}

export default SearchItem