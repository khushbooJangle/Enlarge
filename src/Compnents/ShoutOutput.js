import React from 'react';

const ShoutOutput=(props)=>{
    const outputstyle={
        textAlign: 'center',
        fontSize: '100px',
        marginTop: '-30px',
        padding: '10px',
        color: '#ca3a53',
        fontStyle: 'italic',
        fontFamily: 'serif',
        wordBreak: 'break-word'

    }

    const divstyle={
        display: 'inline-block'
    }

    return(
        <div style={divstyle}>
            <h1 style={outputstyle}>{props.shout.toUpperCase()}</h1>
        </div>
    );
};

export default ShoutOutput;