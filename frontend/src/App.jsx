import { useState } from "react";

const App = () => {
    const [mode, setMode] = useState("light");
    const [text, setText] = useState("Enter Your Text");

    function handleToUppercase(){
        const newText = text.toUpperCase();
        setText(newText);
    }
    function handleLoUppercase(){
        const newText = text.toLowerCase();
        setText(newText);
    }
    return (
        <div className="container p-10">
            <textarea className="form-control my-5" value={text} onChange={(e) => setText(e.target.value)} cols="100" rows="10"></textarea>
            <button onClick={handleToUppercase} className="btn btn-primary mx-1">Convert to Uppercase</button>
            <button onClick={handleLoUppercase} className="btn btn-primary mx-1">Convert to Lowercase</button>
            <button onClick={() => setText("")} className="btn btn-primary mx-1">Clear</button>
            <h3>{text.length ? text.split(" ").length : 0} Words and {text.length} Characters.</h3>
            <p>{0.01 * text.split(" ").length} Minutes Read</p>
        </div>
    );
};

export default App;



