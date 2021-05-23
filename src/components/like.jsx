import React from 'react';

const Like = ({ liked, onClick}) => {

    let className = "fa fa-heart";
    if (!liked)
        className += "-o";
    return ( 
        <i className={className} aria-hidden="true" onClick={onClick} style={{cursor:'pointer'}}/>
     );
}
 
export default Like;