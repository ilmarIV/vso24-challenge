const MealItem = (props) => {

    const formattedPrice = new Intl.NumberFormat("et-EE", { style: "currency", currency: "EUR" }).format(props.meal.price,)

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
                    <button className="meal-item-actions">Add to Cart</button>
                </p>
            </article>
        </li>
        
    )
}

export default MealItem