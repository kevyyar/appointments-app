import './Button.styles.scss';

export const Button = ({children}) => {
    return (
        <button className="button">
            <span className="button-text">{children}</span>
        </button>
    )
}