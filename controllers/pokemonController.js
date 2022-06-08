
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
   
  
  const name = response.data.name;
  const height = response.data.height;
  const weight = response.data.weight;
  const sprite = response.data.sprites.front_default || "no sprite available";
  
  const pokemon = {
      id,
      name,
      height,
      weight,
      sprite
  }
  
  res.status(200).json({
      status:"Tot correcte",
      pokemon
  });

}


module.exports =  pokemonController;