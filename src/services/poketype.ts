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

    public addNewPokeType(req: Request, res: Response) {
        const newPokeType = new PokeType(req.body);
        newPokeType.save((error: Error, poketype: MongooseDocument) => {
            if (error) {
                res.send(error);
                return;
            }
            res.json(poketype);
        })
    }

    public deletePokeType(req: Request, res: Response) {
        const poketypeID = req.params.id;
        PokeType.findByIdAndDelete(poketypeID, (error: Error, deleted: any) => {
            if (error) {
                res.send(error);
                return;
            }
            const message = deleted ? 'Deleted successfully' : 'PokeType not found';
            res.send(message);
        })
    }

    public updatePokeType(req: Request, res: Response) {
        const poketypeID = req.params.id;
        PokeType.findByIdAndUpdate(
            poketypeID,
            req.body,
            (error: Error, poketype: any) => {
                if (error) {
                    res.send(error);
                    return;
                }
                const message = poketype 
                    ? 'Updated successfully' 
                    : 'PokeType not found';
                res.send(message);
            }
        );
    }
}
