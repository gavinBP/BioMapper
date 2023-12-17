import React from 'react'
import "../css/main.css";
import { useState } from 'react';


function AminoAcid(props) {
    const { codon } = props;

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

    const buildAminoAcid = () =>  {

        let temp = '';
        console.log('here is codon: ', codon)
        if(aminos.hasOwnProperty(codon)) {
            temp = aminos[codon];
        }
        else {
            temp = ' [ERROR] '
        }

        return (
            temp
        )
    }

    return (
        <div className='singleAminoAcid'>{buildAminoAcid()}</div>
    )

}

export default AminoAcid;