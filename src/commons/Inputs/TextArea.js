export const TextArea = ({name, label, placeholder, style, register, required}) => {
    return (
        <>
            <label>{label}</label>
            <textarea
                rows={5}
                name={name}
                placeholder={placeholder}
                style={style}
                {...register(label, {required})}
            />
        </>

    );
}