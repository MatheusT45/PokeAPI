import { Request, Response } from "express";
import { MongooseDocument } from 'mongoose';
import { PokeType } from "../models/poketype";

export class PokeTypeService {

    public getAllPokeType(req: Request, res: Response) {
        PokeType.find({}, (error: Error, poketype: MongooseDocument) => {
            if(error) {
                res.send(error);
                return;
            }
            res.json(poketype);
        });
    }

    public async addNewPokeType(req: Request, res: Response) {
        const newPokeType = new PokeType(req.body);
        try {
            const poketype = await newPokeType.save();
            res.json(poketype);
          } catch (e) {
            res.send(e);
            return;
          }
    }

    public deletePokeType(req: Request, res: Response) {
        const poketypeID = req.params.id;
        PokeType.findByIdAndDelete(poketypeID, null, (error: Error, deleted: any) => {
            if (error) {
                res.send(error);
                return;
            }
            const message = deleted ? 'Deleted successfully' : 'Type not found';
            res.send(message);
        })
    }

    public async updatePokeType(req: Request, res: Response) {
        const poketypeID = req.params.id;
        try{
          const poketype = await PokeType.findByIdAndUpdate(
            poketypeID,
            req.body,
          );
          const message = poketype 
            ? 'Updated successfully' 
            : 'Type not found';
          res.send(message);
        } catch (e) {
          res.send(e);
          return;
        }
    }
}
