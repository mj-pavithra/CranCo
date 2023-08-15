import "../css/InputField.css"

const InputField = ({topic, placeholder}) => {
    return ( 
        <div className="inputFieldContainer">
            <div className="topic">{topic}</div>
            <input type="text" placeholder={placeholder} className="inputField"/>
        </div>
     );
}
 
export default InputField;