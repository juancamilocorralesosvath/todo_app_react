import { useState } from 'react';
function HolaMundoFuncional (props) {
    //para manejar el estado en una funcion, hacemos uso del hook useState
    const [texto, setTexto] = useState('hola desde el componente!');
    const [edad, setEdad] = useState(0);
    console.log('😂', props);
    return(
        <>
        <h1>Componente </h1>
        <h2>{texto}</h2>
        <h2>{edad}</h2>
        <input 
            type="text"
            placeholder="cambia el texto!"
            onChange={e => setTexto(e.target.value)}
        />
        <input 
            type="text"
            placeholder="cambia la edad!"
            onChange={e => setEdad(e.target.value)}
        />
        </>
    )
}
export default HolaMundoFuncional;