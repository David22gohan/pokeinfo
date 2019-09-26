import MaterialTable from 'material-table';
import React from 'react';



function Tabla ( { pokeinfo } ){
  //Se declaran las columnas de las tablas, se le asigna su nombre de campo y se almacenan en una variable
    const columns = [
      {
        title: 'Pokemon', 
        field: 'pokemon',
        cellStyle: {backgroundColor: '#039be5', color:'#FFF',}
      },
      {
        field: 'url',
        title: 'Avatar',
        render: rowData => <img src={rowData.url} alt="pokemon" style={{width: 50, borderRadius: '50%'}}/>
      },
      
      
    ]

   

  /*Recorriendo el JSON de la PokeAPI para obtener el nombre de los pokemones, su imagen y se almacenan en una variable */
    const data =  pokeinfo.map(pokemon => {

      let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
      let pokeIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
      
      //Se asigna los datos de la PokeAPI en los campos correspondientes de la tabla
      return {
              pokemon: pokemon.name,
              url: `${url}${pokeIndex}.png?raw=true`,
              }
             
    }) 
    

    
  //Se renderiza el componente MaterialTable con sus atributos declarados anteriormente 
  return(
  
    <MaterialTable
      title="Lista de pokemons"
      columns={columns} 
      data={data}
      options={{selection:true, headerStyle:{backgroundColor:'#01579b', color: '#fff' } }}
      onSelectionChange={
        (event,rowData) => alert('Haz seleccionado a: ' + rowData.pokemon)
        //console.log('You selected ' + JSON.stringify(row) + ' rows')
          
      }
      

    />

  

    
   
  );

}

export default Tabla;