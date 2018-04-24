import React from 'react';
import PropTypes from 'prop-types';

const PetersComponent = (props) => {
    console.log(props);
    const petersString = "Look Peter, the component works!".repeat(props.times);

    return (
        <p style={{color : props.color}}> {petersString} </p>
    ); 
}

/*
PetersComponent.propTypes = {
    times: PropTypes.number,
    color: PropTypes.string
}

PetersComponent.defaultProps = {
    times: 1,
    color: '#000'
}*/

export default PetersComponent;