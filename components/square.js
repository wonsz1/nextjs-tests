
    function Square(props) {
        let buttonClass = "square";
        
        if(props.value == 'X') {
            buttonClass += ' xClass';
        } 
        if(props.value == 'O') {
            buttonClass += ' oClass';
        }

        return (
            <button className={buttonClass} onClick={props.onClick}>
                {props.value}
            </button>
        )
    }

export default Square;