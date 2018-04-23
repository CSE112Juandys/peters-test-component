import React from 'react';

const PetersComponent = (props) => {
    console.log(props);
    const petersString = "Look Peter, the component works!".repeat(props.times);

    return (
        <p style={{color : props.color}}> {petersString} </p>
    ); 
}

export default PetersComponent;