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
      res.send(pokemon);
    })
  }

  public addNewPokemon(req: Request, res: Response) {
    const newPokemon = new Pokemon(req.body);
    newPokemon.save(async (error: Error, pokemon: MongooseDocument) => {
      if (error) {
          res.send(error);
          return;
      }
      res.json(pokemon);
    })
  }

  public deletePokemon(req: Request, res: Response) {
    const pokemonId = req.params.id;
    Pokemon.findByIdAndDelete(pokemonId, (error: Error, deleted: any) => {
      if (error) {
        res.send(error);
        return;
      }
      const message = deleted ? 'Deleted successfully' : 'Pokemon not found';
      res.send(message);
    })
  }

  public updatePokemon(req: Request, res: Response) {
    const pokemonId = req.params.id;
    Pokemon.findByIdAndUpdate(
      pokemonId,
      req.body,
      (error: Error, pokemon: any) => {
        if (error) {
          res.send(error);
          return;
        }
        const message = pokemon 
          ? 'Updated successfully' 
          : 'Pokemon not found';
        res.send(message);
      }
    );
  }
}
