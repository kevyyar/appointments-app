import './ColumnLayout.styles.scss'

export const ColumnLayout = ({ children }) => {
    return (
        <div className="column-layout">
            {children}
        </div>
    )
}