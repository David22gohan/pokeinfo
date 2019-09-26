import React from 'react';
import { Link } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

//Creando y mandando a llamar los estilos de los botones
const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

  

const Home = () =>{
const classes = useStyles();
    return(
    <div className="App">
        <div className="App_header">
            <Animated animationIn="fadeInUpBig">
                <div className="container_logo">
                    <img src={process.env.PUBLIC_URL + '/images/pokemon.png'} alt='pomekon' />
                </div>
            </Animated>
            <Animated animationIn="rollIn">
                <div className="container_button">
                    <Fab variant="extended" color="primary" aria-label="add" className={classes.margin}>
                        <Link to='/pokemons'>Ver pokemons</Link>     
                    </Fab>
                </div>
            </Animated>
            
            
           
        </div>
       
        
    </div>
    );
}


export default Home;