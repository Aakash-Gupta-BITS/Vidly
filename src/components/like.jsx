import React, { Component } from 'react';

const Like = ({Liked, onClick}) => {

    let className = "fa fa-heart";
    if (Liked)
        className += "-o";
    return ( 
        <i className={className} aria-hidden="true" onClick={onClick} style={{cursor:'pointer'}}/>
     );
}
 
export default Like;