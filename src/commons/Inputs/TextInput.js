export const TextInput = ({ name, label, type = "text", placeholder, value, style, register, required }) => {
    return (
        <>
            <label>{name}</label>
            <input name={name} type={type} placeholder={placeholder} style={style} {...register(label, { required })} autoComplete="off" />
        </>

    );
}