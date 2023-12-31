import './Tooltip.css'

const Tooltip = (props) => {
    return (
        <div className='tooltip-container'>
            {/* Element to hover over to show tooltip */}
            {props.children}
            {/* Postion prop for rendering tooltip in given position */}
            <div className={`tooltip tooltip-${props.position}`}>
                <div className={`tooltip-arrow arrow-${props.position}`}></div>
                <span>Thanks for Hovering! I'm a Tooltip</span>
            </div>
        </div>
        
    );
}

export default Tooltip