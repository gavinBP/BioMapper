import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import "../css/main.css";

function About() {

    const navigate = useNavigate();

    const navHome = () => {
        navigate('/');
    }

    return (
        <div>
            <h1>Alright so here is the explanation.</h1>
            <h2>You can use this app to model out DNA, RNA, mRNA, and primary protein structures.</h2>
            <Button variant='contained' onClick={() => {navHome();}}>Return Home</Button>
            <div className='about-sections'>
                <div>
                <div className='about-section'>
                    DNA display
                </div>
                <div>
                    info here:
                </div>
                </div>
                <div>
                <div className='about-section'>
                    RNA Display
                </div>
                <div>
                    info here:
                </div>
                </div>
                <div>
                <div className='about-section'>
                    mRNA Display
                </div>
                <div>
                    info here:
                </div>
                </div>
                <div>
                <div className='about-section'>
                    Primary Protein Structure Display
                </div>
                <div>
                    info here:
                </div>
                </div>
            </div>
        </div>
    )
}

export default About;