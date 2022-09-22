import './featured.css'

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1575283757534-1a1999f6f341?q=100&fm=jpg&w=500&fit=max" alt="" />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1557335200-a65f7f032602?q=100&fm=jpg&w=500&fit=max" alt="" />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src="https://images.unsplash.com/photo-1547406683-88dd1d03c425?q=100&fm=jpg&w=500&fit=max" alt="" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured