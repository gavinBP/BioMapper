import React from 'react'
import "../css/main.css";
import { useState } from 'react';
import AminoAcid from './AminoAcid';

function AminoAcidChain(props) {
    const basePairs = props.basePairs;


    const aminos = {
        ATT: "Isoleucine",
        ATC: "Isoleucine",
        ATA: "Isoleucine",
        CTT: "Leucine",
        CTC: "Leucine",
        CTA: "Leucine",
        CTG: "Leucine",
        TTA: "Leucine",
        TTG: "Leucine",
        GGT: "Valine",
        GTC: "Valine",
        GTA: "Valine",
        GTG: "Valine",
        TTT: "Phenylalanine",
        TTC: "Phenylalanine",
        ATG: "Methionine",
        TGT: "Cysteine",
        TGC: "Cysteine",
        GCT: "Alanine",
        GCC: "Alanine",
        GCA: "Alanine",
        GCG: "Alanine",
        GGT: "Glycine",
        GGC: "Glycine",
        GGA: "Glycine",
        GGG: "Glycine",
        CCT: "Proline",
        CCC: "Proline",
        CCA: "Proline",
        CCG: "Proline",
        ACT: "Threonine",
        ACC: "Threonine",
        ACA: "Threonine",
        ACG: "Threonine",
        TCT: "Serine",
        TCC: "Serine",
        TCA: "Serine",
        TCG: "Serine",
        AGT: "Serine",
        AGC: "Serine",
        TAT: "Tyrosine",
        TAC: "Tyrosine",
        TGG: "Tryptophan",
        CCA: "Glutamine",
        CAG: "Glutamine",
        AAT: "Asparagine",
        AAC: "Asparagine",
        CAT: "Histidine",
        CAC: "Histidine",
        GAA: "Glutamic acid",
        GAG: "Glutamic acid",
        GAT: "Aspartic acid",
        GAC: "Aspartic acid",
        AAA: "Lysine",
        AAG: "Lysine",
        CGT: "Arginine",
        CGC: "Arginine",
        CGA: "Arginine",
        CGG: "Arginine",
        AGA: "Arginine",
        AGG: "Arginine",
        TAA: "STOP codon found!",
        TAG: "STOP codon found!",
        TGA: "STOP codon found!"
    }

    const chain = () => {

        const baseExcess = basePairs.length % 3;
        const baseLength = basePairs.length - baseExcess;
        const length = baseLength / 3;
        // console.log('here is aminoAcid chain: ', length);
        let answer = [];
        for(let i = 0; i < length; i++) {
            let counter = i * 3;
            // let temp = [];
            let temp = '';
            for(let x = counter; x < counter+3; x++) {
                // temp.push(basePairs[x]);
                temp += basePairs[x];
            }
            answer.push(temp);
        }
        console.log('here is aminoAcid chain: ', answer);
        return answer;
    }

    const aminoChain = () => {
        
        let answer = [];
        let codons = chain();
        for(let i of codons) {
            if(aminos.hasOwnProperty(i)) {
                answer.push(<div>{<AminoAcid codon= {i}/>}</div>);
            }
            else {
                answer.push(<div>{' [ERROR] '}</div>);
            }
        }
        console.log('here is the amino acid chain built with aminoacid components:' , answer);
        return (
            answer
        )
    }

    return (
        <div className='parentAminoAcidChain'><div className='aminoAcidChain'>{aminoChain()}</div></div>
    )
}

export default AminoAcidChain;