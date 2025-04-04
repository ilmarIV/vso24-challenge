import { useEffect } from "react";

const Meals = () => {

    useEffect(() => {
        fetch("http://localhost:3001/meals")
        .then(res => res.json())
        .then(data => {
          console.log("Meals data:", data);
        })
    });

    return (
        <ul id="meals">
            { 
                // list of meals
            }
        </ul>
    )
}

export default Meals