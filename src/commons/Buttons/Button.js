import './Button.styles.scss';

export const Button = ({children, style={}, onClick}) => {
    return (
        <button className="button" style={style} onClick={onClick}>
            <span className="button-text">{children}</span>
        </button>
    )
}