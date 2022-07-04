import './ErrorMessage.styles.scss';

export const ErrorMessage = ({error}) => {
    return (
        <span className="error-message">
            {error}
        </span>
    );
}