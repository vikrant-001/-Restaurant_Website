import classes from "./MealItem.module.css"
const MealItem = (props) => {
    const price =` $${props.price.toFixed(2)}`
    return (
        <li>
            <div className={classes.meal}>
                <h3>{props.price}</h3>
            </div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </li>
    )
}

export default MealItem