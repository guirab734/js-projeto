function InputField({ label, type, name }) { 
    return(
        <div>
            <label> {label}</label>
            <input type={type} name = {name} />
        </div>
    )
}
export default InputField;