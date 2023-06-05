import "./index.css"

export const Button = ({children, disabled, type, style, onClick, buttonClass, formaction}) => {
    return (
        <button 
            className={buttonClass}
            disabled={disabled}
            style={style}
            type={type}
            onClick={onClick}
            formaction={formaction}
        >
            <span>{children}</span>
        </button> 
    )
}