import Button from "./UI/Button"
import { useContext } from 'react'
import CartContext from '../store/CartContext'

const MealItem = (props) => {
    const formattedPrice = new Intl.NumberFormat("et-EE", { style: "currency", currency: "EUR" }).format(props.meal.price,);
    
    const cartContext = useContext(CartContext);

    return (
        <li className="meal-item">
            <article>
                <img src={require(`../assets/${props.meal.image}`)} alt={props.meal.name}/>
                <div>
                    <h3>{props.meal.name}</h3>
                    <p className="meal-item-price">{formattedPrice}</p>
                    <p className="meal-item-description">{props.meal.description}</p>
                </div>
                <p>
                    <Button 
                        className="meal-item-actions" 
                        textOnly={false} 
                        onClick={() => cartContext.addItem(props.meal)}
                    >Add to Cart</Button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem