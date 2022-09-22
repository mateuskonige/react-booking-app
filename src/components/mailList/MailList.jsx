import "./mailList.css"

function MailList() {
  return (
    <div className="mail">
      <h1 className="mailTitle">Economize tempo, economize dinheiro!</h1>
      <div className="mailDesc">Inscreva-se e enviaremos as melhores ofertas para você</div>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your e-mail" />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default MailList