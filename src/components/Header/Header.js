import './Header.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <header className={'header'}>
            <h1 className={'header__title'}>
                <Link className = {'header__title-link'} to = {'/'}>Аттестационная работа</Link></h1>
            <div className={'header__item'}>
                <Link to = {'users'} className={'header__link'}>Cписок пользователей</Link>
            </div>
                {/*<li className={'header__item'}>*/}
                {/*    <Link to = {'user'} className={'header__link'}>Пользователь</Link>*/}
                {/*</li>*/}
        </header>
        )

}

export default Header;