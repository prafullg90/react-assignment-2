import React from 'react';

const CharComponents = (props) => {
    return(
        <li onClick={props.click}>{props.value}</li>
    );
}

export default CharComponents; 