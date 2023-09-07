import reactLogo from '../assets/react.svg'
import './Header.css'

function Header() {
  
  return (
    <>
      <header>
        <div className="logo">
            <img src={reactLogo} alt="Логотип" />
        </div>
        <nav>
            <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Контакты</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header
