import AddIconComponent from "./addIconComponent";
import MinusIconComponent from "./minusIconComponent";

const CounterContainerComponent = (props) => {
    
    return (
        <div className="counter-container">
            <MinusIconComponent deleteItemToCart={props.deleteItemToCart} />
            <p className="counter">{props.counter}</p>
            <AddIconComponent addItemToCart={props.addItemToCart} />
        </div>
    )
}

export default CounterContainerComponent;