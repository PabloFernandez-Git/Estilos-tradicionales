import React from 'react';

const styles = {
    backgroundColor: 'royalblue', 
    color: '#fafafa'
}

const Button = () => {
    return (
        <button style={styles}>Click Me!</button>
    );
}

export default Button;


/*
Estilos en línea

Desaconsejado!

Existen dos maneras:

1. Escribir las propiedades directamente en linea 

<button style={{backgroundColor: 'royalblue', color: '#fafafa'}}>Click Me!</button>


2. Usar un objeto y llamararlo

const styles = {
    backgroundColor: 'royalblue', 
    color: '#fafafa'
}

const Button = () => {
    return (
        <button style={styles}>Click Me!</button>
    );
}





*/