import AddIconComponent from "./addIconComponent";
import MinusIconComponent from "./minusIconComponent";

const CounterContainerComponent = (props) => {
    
    return (
        <div className="counter-container">
            <MinusIconComponent />
            <p className="counter">{props.counter}</p>
            <AddIconComponent />
        </div>
    )
}

export default CounterContainerComponent;