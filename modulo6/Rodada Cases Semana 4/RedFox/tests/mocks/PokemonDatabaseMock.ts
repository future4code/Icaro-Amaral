import { CustomError } from "../../src/Error/CustomError";
import { Pokemon } from "../../src/Model/Pokemon";
import { PokemonMock, PokemonMock2 } from "./PokemonMock";

export class PokemonDatabaseMock {
    public getPokemonByName = async (name: string, limit: number, page: number): Promise<Pokemon | null> => {
        if (name === "Pikachu") {
            return PokemonMock
        } else if (name === "Psyduck") {
            return PokemonMock2
        } else {
            throw new CustomError("Pokemon not found", 404)
        }
    }
} 