import { useState } from "react";


const Form = () => {

    const [text, setText] = useState("Enter Your Text");

    function handleConvertUpper(){
        const newText = text.toUpperCase();
        setText(newText);
    }

    return (
        <div>
            <div className="container">
                
                <h1 className="text-center">Text Converter</h1>
                    <textarea onChange={(e)=> { setText(e.target.value)}} value={text} className="form-control" cols="100" rows="10" /> <br />
                    <button onClick={handleConvertUpper}  className="btn btn-primary">Convert To Upper </button>

              
            </div>
        </div>
    );
};

export default Form;