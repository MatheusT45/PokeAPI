import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';
import { Pokemon } from "../models/pokemon";

export class PokedexService {
  public getPokemonByNumber(req: Request, res: Response) {
    const pokemonNumber = req.params.number;
    Pokemon.find({ number: pokemonNumber }, (error: Error, pokemon: MongooseDocument) => {
      if (error) {
          res.send(error);
          return;
      }
      res.send(pokemon);
    })
  }
}