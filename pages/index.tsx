import React, { useState } from "react";

const InputElement = () => {

    const [inputText, setInputText] = useState("");
    const [historyList, setHistoryList] = useState(new Array<string>());
    return <div><input type="text"
        onChange={(e) => {
            setInputText(e.target.value);
            setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="Enter Some Text=" />
        <br />
        {inputText}
        <hr /><br />
        <ul>
            {historyList.map((record) => (<div>{record}</div>))}
        </ul>
    </div >
};

export default InputElement;