//esta es la manera pro, jiji, no mentira
//la otra es namas importar el React y 
//extender de React.Component
import React, { Component } from 'react';
//OJO con los pasos pri: Will - Render - Did
class HolaMundo extends Component{
    //recuerda que el constructor es como el que
    //se encarga de hacer los moldes
    constructor(props){
        super(props);
        this.state = {
            texto: 'Hola desde el componente!'
        }
    }
    //es mala practia utilizar algo antes de que el componente se ejecute
    //tiene que ver con los tiempos de carga -> si el usuario ve que la pagina se esta demorando, pailas, se va
    //puede generar el llamado 'cuello de botella'
    componentWillMount(){
        console.log('se va a montar el componente...')
        //simulacion de un cuello de botella
        /* for(let i = 0; i < 10000; i++){
            console.log('te paro la app perro jiji')
        } */
    }
    componentDidMount(){
        console.log('se monto el componente!');
        // simulemos una peticiona a la base de datos
        setTimeout(
            //el setTimeOut ejecuta la funcion despues de cierto tiempo
            () =>{
                this.setState({texto: 'y ahora cambio y te digo adios!'})
            },
            3000
        )
    }

    render(){
        console.log('RENDER');
        return(
            <React.Fragment>
            <h1>Componente HolaMundo</h1>
            <h2>{this.state.texto}</h2>
            </React.Fragment>
        );
    }
}
// interesante: el default es para que tengamos que llamar 
//eso que exportamos de la misma manera cuando lo vayamos a 
//importar
export default HolaMundo;