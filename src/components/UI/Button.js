const Button = (props) => {
    const className = props.textOnly ? "text-button" : "button";
  
    return (
        <button className={className} onClick={props.onClick}>
            {props.children}
        </button>
    );
};
  
export default Button;
