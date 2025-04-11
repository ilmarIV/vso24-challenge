import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { useContext } from 'react'
import CartContext from '../store/CartContext'

const Header = ({onShowCart}) => {
    const cartContext = useContext(CartContext);
    const totalItems = cartContext.getTotalItems();

    return (
        <header id="main-header">
            <div id="title">
                <img src={logo}/>
                <h1>React Food Order App</h1>
            </div>
            <nav>
            <Button textOnly={true} onClick={onShowCart}>Cart ({totalItems})</Button>
            </nav>
        </header>
    )
}

export default Header