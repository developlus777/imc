import React from 'react'
import FormularioCalculo from './FormularioCalculo';
import VerCalculo from './VerCalculoIMC';
import BasculaIMC from './BasculaIMC';
export default function cuerpocalculo() {
    return (
        <article>
            <FormularioCalculo/>
            <VerCalculo altura={15} peso={89}/>
            <BasculaIMC/>
        </article>
    )
}