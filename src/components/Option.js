const Option = (props) => {
    return (
        <div>
            {props.optionText}
            {props.optionText &&
            <button
                onClick={(e) => {
                    console.log(e.target.elements);
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
            </button>}
        </div>
    )
};

export default Option;