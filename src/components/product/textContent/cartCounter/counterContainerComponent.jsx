const CounterContainerComponent = (props) => {
    
    return (
        <div className="counter-container">
            <img src="/images/icon-minus.svg" alt="minus" className="counter-icon" onClick={props.deleteItemToCart}/>
            <p className="counter">{props.numItemInCart}</p>
            <img src="/images/icon-plus.svg" alt="plus" className="counter-icon"onClick= {props.addItemToCart}/>
        </div>
    )
}

export default CounterContainerComponent;