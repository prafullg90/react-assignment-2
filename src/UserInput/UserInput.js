import React from 'react';

const userInput = (props) => {

    const style = {
        border: '2px solid red',
        borderRadius: "4px",
        width : "50%",
        padding: "12px 20px",
        
    };


    return(
        <div>
            
            <input style={style} type='text' onChange={props.change} value={props.text} />
            <p>{props.text}</p>
            <p>Length is : {props.length}</p>
            
        </div>
    );
}

export default userInput;