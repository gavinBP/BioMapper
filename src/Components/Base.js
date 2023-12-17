import React from 'react'
import "../css/main.css";
import { useState } from 'react';


function Base(props) {

    const base = props.base;
    if(base === 'A') {
        return (
            <div className='base' style={{backgroundColor: 'red'}}>
                {base}
            </div>
        );
    }
    if(base === 'T') {
        return (
            <div className='base' style={{backgroundColor: 'green'}}>
                {base}
            </div>
        );
    }
    if(base === 'G') {
        return (
            <div className='base' style={{backgroundColor: 'purple'}}>
                {base}
            </div>
        );
    }
    if(base === 'C') {
        return (
            <div className='base' style={{backgroundColor: 'yellow'}}>
                {base}
            </div>
        );
    }
}

export default Base;