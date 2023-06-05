import "./index.css"

export const Button = ({children, disabled, type, style, onClick, buttonClass}) => {
    return (
        <button 
            className={buttonClass}
            disabled={disabled}
            style={style}
            type={type}
            onClick={onClick}
        >
            <span>{children}</span>
        </button> 
    )
}