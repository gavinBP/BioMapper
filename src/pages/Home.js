import React from 'react';
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { color } from '@mui/system';
import "../css/main.css";
import BasePairs from '../Components/basePairs';
import Base from '../Components/Base'
import AminoAcidChain from '../Components/AminoAcidChain.js';
import AminoAcid from '../Components/AminoAcid';
import { Opacity } from '@mui/icons-material';

function Home() {

    const navigate = useNavigate();
    const [pairs, setPairs] = useState('');
    const [tempPairs, setTempPairs] = useState('');
    const [reciprocalPairs, setReciprocalPairs] = useState('');
    const [showDNA, setShowDNA] = useState(false);
    const [showMRNA, setShowMRNA] = useState(false);
    const [mRNAPairs, setMRNAPairs] = useState('');
    const [tempMRNAPairs, setTempMRNAPairs] = useState('');

    const redButton = {
        backgroundColor: 'red'  
    }

    const blueButton = {
        backgroundColor: 'blue'
    }

    const greenButton = {
        backgroundColor: 'green'
    }

    const navAbout = () => {
        navigate('/About')
    }

    const handleRNAEnter = () => {
        setPairs(tempPairs);
    }

    const handleDNA = () => {
        setReciprocalPairs(convertPairs(pairs));
    }

    const convertPairs = (seq) => {
        let answer = '';
        for(let i of seq) {
            if(i === 'A') {answer += 'T'}
            if(i === 'T') {answer += 'A'}
            if(i === 'G') {answer += 'C'}
            if(i === 'C') {answer += 'G'}
        }
        return answer;
    }

    const DNAButton = () => {
        if(showDNA) {setShowDNA(false)}
        else {setShowDNA(true)}
    }

    const mRNAButton = () => {
        if(showMRNA) {setShowMRNA(false)}
        else {setShowMRNA(true)}
    }

    const handleMRNAEnter = () => {
        setMRNAPairs(tempMRNAPairs);
    }

    return (
        <div>
        <div className='main-menu-home'>
            <div>
                <h1>BioMapper</h1>
                <h2>Main Page:</h2>
            </div>
            <div className='home-buttons'>
                <div className='home-button'><Button variant="contained" style={redButton} onClick={() => {navAbout();}}>About</Button></div>
                <div className='home-button'><Button className='home-buttons' variant="contained" style={blueButton} onClick={DNAButton}>Enter RNA Sequence</Button></div>
                <div className='home-button'><Button className='home-buttons' variant="contained" style={blueButton} onClick={(mRNAButton)}>Enter mRNA Sequence</Button></div>
                <div className='home-button'><Button className='home-buttons' variant="contained" style={greenButton}>Load Sequences</Button></div>
            </div>
        </div>
        {showDNA ? (<div style={{margin: 30}}>
            {/* <div>main display area</div> */}
            <div style={{display:'flex', flexDirection:'row'}}>
                <label htmlFor="userInput" style={{marginRight: '25px', marginTop: '7px'}}>Enter RNA Sequence:</label>
                <input type="text" id="userInput" style={{marginRight: '15px'}}onChange={(e) => {setTempPairs(e.target.value)}}></input>
                <div><Button onClick={handleRNAEnter}>Enter</Button></div>
                <div><Button onClick={handleDNA}>Reveal DNA</Button></div>
            </div>
            
            <BasePairs pairs={pairs}/>
            <BasePairs pairs={reciprocalPairs}/>
        </div>) : (<div style={{opacity:0, margin: 30}}>
            {/* <div>main display area</div> */}
            <div style={{display:'flex', flexDirection:'row'}}>
                <label htmlFor="userInput" style={{marginRight: '25px', marginTop: '7px'}}>Enter RNA Sequence:</label>
                <input type="text" id="userInput" style={{marginRight: '15px'}}onChange={(e) => {setTempPairs(e.target.value)}}></input>
                <div><Button onClick={handleRNAEnter}>Enter</Button></div>
                <div><Button onClick={handleDNA}>Reveal DNA</Button></div>
            </div>
            
            <BasePairs pairs={pairs}/>
            <BasePairs pairs={reciprocalPairs}/>
        </div>)}
        {showMRNA ? (<div style={{margin: 30}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <label htmlFor='userInput' style={{marginRight: '25px', marginTop: '7px'}}>Enter mRNA Sequence</label>
                <input type='text' id="userInput" style={{marginRight: '15px'}} onChange={(e) => {setTempMRNAPairs(e.target.value)}}></input>
                <div><Button onClick={handleMRNAEnter}>Enter</Button></div>
            </div>

            <BasePairs pairs={mRNAPairs}/>
            <AminoAcidChain basePairs={mRNAPairs}/>
            {/* <AminoAcid codon='ATA'/><AminoAcid codon="ATG"/> */}
        </div>) : (<div style={{opacity:0, margin:30}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <label htmlFor='userInput' style={{marginRight: '25px', marginTop: '7px'}}>Enter mRNA Sequence</label>
                <input type='text' id="userInput" style={{marginRight: '15px'}} onChange={(e) => {setTempMRNAPairs(e.target.value)}}></input>
                <div><Button onClick={handleMRNAEnter}>Enter</Button></div>
            </div>

            <BasePairs pairs={mRNAPairs}/>
            <AminoAcidChain basePairs={mRNAPairs}/>
            {/* <AminoAcid codon='ATA'/><AminoAcid codon="ATG"/> */}
        </div>)}




        </div>
    )
}

export default Home;