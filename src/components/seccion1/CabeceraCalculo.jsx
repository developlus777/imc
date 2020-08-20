import React from 'react'

let CabeceraCalculo = ({nombre_clase,titulo}) => {
    // let {
    //     nombre_clase,
    //     titulo
    // } = props;
    return (
        <div className={nombre_clase}>
            <h1>{titulo}</h1>
        </div>
    )
}

export default CabeceraCalculo
