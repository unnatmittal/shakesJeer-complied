import React from 'react';
import './right.css';
import panther from './images/panther.png';

const RightComponent=()=>{
    return (
    <div className="jr_card">
    <div className="content">
        <h2>Border Gavaskar</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's stanwith the release of
        Letraset sheets containing Lorem Ipsum passages, and more recently with</p>
    </div>
    <img src={panther} className="jr_logo" alt="jr_logo" />
    </div>
    );
}

export default RightComponent;