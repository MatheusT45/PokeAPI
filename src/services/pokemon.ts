import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';
import { Pokemon } from "../models/pokemon";

export class PokeService {
  public getAllPokemon(req: Request, res: Response) {
    Pokemon.find({}, async (error: Error, pokemon: MongooseDocument) => {
      if(error) {
          res.send(error);
          return;
      }
      res.json(pokemon);
    });
  }

  public getPokemonById(req: Request, res: Response) {
    const pokemonId = req.params.id;
    Pokemon.findById(pokemonId, (error: Error, pokemon: MongooseDocument) => {
      if (error) {
        res.send(error);
        return;
      }
      res.json(pokemon);
    })
  }

  public async addNewPokemon(req: Request, res: Response) {
    const newPokemon = new Pokemon(req.body);
    try {
      const pokemon = await newPokemon.save();
      res.json(pokemon);
    } catch (e) {
      res.send(e);
      return;
    }
  }

  public deletePokemon(req: Request, res: Response) {
    const pokemonId = req.params.id;
    Pokemon.findByIdAndDelete(pokemonId, null,  (error: Error ,deleted: any) => {
      if (error) {
        res.send(error);
        return;
      }
      const message = deleted ? 'Deleted successfully' : 'Pokemon not found';
      res.send(message);
    })
  }

  public async updatePokemon(req: Request, res: Response) {
    const pokemonId = req.params.id;
    try{
      const pokemon = await Pokemon.findByIdAndUpdate(
        pokemonId,
        req.body,
      );
      const message = pokemon 
        ? 'Updated successfully' 
        : 'Pokemon not found';
      res.send(message);
    } catch (e) {
      res.send(e);
      return;
    }
  }
}
