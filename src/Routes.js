import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import pokeinfoContainer from './containers/pokeinfoContainer';


const Routes = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/pokemons' component={pokeinfoContainer} />
        </Switch>
    )
}

export default Routes;