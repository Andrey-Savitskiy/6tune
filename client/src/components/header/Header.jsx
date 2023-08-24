import logo from "../../assets/logo.png";
import './header.css'
import OrderButton from "../UI/button/OrderButton.jsx";
import Arrow from "../UI/arrow/Arrow.jsx";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={'header'}>
            <NavLink to={'/form'}>
                <OrderButton className={'header-order-button'}/>
            </NavLink>

            <div className="header-paragraph-one">
                <p>Это<br/>Антон...</p>
                <Arrow className={'header-arrow'}/>
            </div>

            <p className="header-paragraph-two">...и у него есть к тебе всего<br/>один вопрос...</p>
            <img className={'logo'} src={logo} alt="Антон Усков"/>
            <h1 className={'header-one'}>А ты веришь<br/>в чудеса?..</h1>
            <p className="header-paragraph-three">*МОЕ ВЫСТУПЛЕНИЕ  - ЭТО ГАРАНТИЯ ТОГО,<br/>ЧТО ТЫ СНОВА НАЧНЕШЬ В НИХ ВЕРИТЬ!</p>
        </header>
    );
};

export default Header;