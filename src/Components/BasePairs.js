import React from 'react'
import "../css/main.css";
import { useState } from 'react';
import Base from './Base';

function BasePairs(props) {
    const pairs = props.pairs;
    // const [base, setBase] = useState([]);

    const chain = () => {
        let base = [];
        for(let i of pairs) {
            base.push(i);
        }
        let item = [];
        for(let i of base) {
            item.push(<div><Base base = {i}/></div>);
        }
        return (
            <div className='bases'>{item}</div>
        );
    }

    return (
        <div>
            {/* <div>here is sequence</div> */}
            {chain()}
        </div>
    )
}

export default BasePairs;