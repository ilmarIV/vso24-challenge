import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {

    let [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/meals")
        .then(res => res.json())
        .then(data => {
            console.log("Meals data:", data);
            setMeals(data);
        }).catch((err) => {
            console.error("Error fetching meals:", err);
        });
    }, []);

    return (
        <ul id="meals">
            {
                meals.map((meal) => {
                    return <MealItem key={meal.id} meal={meal} />
                })
            }
        </ul>
    )
}

export default Meals