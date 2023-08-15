import "../css/InputField.css"

const InputField = ({ topic, placeholder, flexDirection, alignContent, width }) => {
    return ( 
        <div className={`inputFieldContainer ${flexDirection} ${alignContent}`}>
            <div className="topic">{topic}</div>
            <input type="text" placeholder={placeholder} className={`inputField`} style={{ width: width }}/>
        </div>
     );
}
 
export default InputField;
