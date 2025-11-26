import React from "react";
function Form(){
    return(
        <div>
            <h1>Welcome to the File Uploader</h1>
            <input type="file" placeholder="Upload a PDF"/>
            <input type="file" placeholder="Upload other PDF"/>
            <button>Submit</button>
        </div>
    )
}

export default Form

