import React from 'react';
import '../components/css/Title.css';

const Title =({ title })=>{
    return (
        <div className="section-title">
            <h4>{title}</h4>
        </div>
    )
}

export default Title;
