
const axios = require('axios').default;

const pokemonController = async (req, res) => {
  const { id } = req.params;
  let response;

  try {
      response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  } catch ( err ){
      console.log();
      res.status(err.response.status).json({
          status: "Error",
          msg: err.message
      });
      return
  }
   
  
  const {name, height, weight, sprites} = response.data;
  
  const pokemon = {
      name,
      height,
      weight,
      sprite: sprites.front_default || "no sprite available"
  }
  
  res.status(200).json({
      status:"OK",
      pokemon
  });

}


module.exports =  pokemonController;