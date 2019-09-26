import React, { Component } from 'react';
import Tabla from '../components/Tabla';
import { Animated } from 'react-animated-css';
import axios from 'axios';


class PokeinfoContainer extends Component{

    state = {
        pokeInfo: []
    }

    //comienza ciclo de vida y se hace la peticion a la API
    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
        
        //usando una promesa
        .then(res => {
            const pokeInfo = res.data.results;  
        
            //Actualizar el state
            this.setState({
                pokeInfo
            })
        })
        .catch(error =>{
            console.log(error);
        })
    }
    render(){

        //pasar los valores por props a Tabla
        const { pokeInfo } = this.state;
        return(
            <Animated animationIn="fadeInDown">
                <Tabla pokeinfo={pokeInfo} className="container_tabla"
                
                />    
            </Animated>
           
            
        );
    }
}

export default PokeinfoContainer;