import app from "./app";
import { PokemonBusiness } from "./Business/PokemonBusiness";
import { PokemonController } from "./Controller/PokemonController";
import { PokemonDatabase } from "./Data/PokemonDatabase";
import { routerPoke } from "./Router/Router";

const pokemonController = new PokemonController(
    new PokemonBusiness(
        new PokemonDatabase()
    ))

app.use("/pokemon", routerPoke)


app.get("/pokemon/name", pokemonController.getPokemonByName)
app.get("/pokemon/generation", pokemonController.getPokemonByGeneration)
app.get("/pokemon/type", pokemonController.getPokemonByType)
app.get("/pokemon/id", pokemonController.getPokemonById)
app.get("/pokemon/legendary", pokemonController.getPokemonLegendary) 