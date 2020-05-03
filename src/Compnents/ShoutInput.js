import React from 'react';

const ShoutInput=(props)=>{
    const inputstyle={
        textAlign:'center',
        fontSize: '30px',
        margin: '50px',
        width: '40vw',
        borderColor: 'rgba(181, 69, 69, 0.55)',
        color: '#524338eb'
    }

    const divstyle={
        display: 'inline-block'
    }
    return(
        <div style={divstyle}>
            <input type="text" style={inputstyle} onChange={props.changed} placeholder="Type Here........" />
        </div>
    );
};
export default ShoutInput;