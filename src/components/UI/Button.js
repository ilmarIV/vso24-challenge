const Button = (props) => {
    const className = props.button.textOnly ? "text-button" : "button";
  
    return (
        <button className={className} onClick={props.button.onClick}>
            {props.children}
        </button>
    );
};
  
export default Button;