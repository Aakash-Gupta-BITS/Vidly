import React from 'react';
import PropTypes from 'prop-types';

const Like = ({ liked, onClick}) => {

    let className = "fa fa-heart";
    if (!liked)
        className += "-o";
    return ( 
        <i className={className} aria-hidden="true" onClick={onClick} style={{cursor:'pointer'}}/>
     );
}

Like.propTypes = {
    liked: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Like;