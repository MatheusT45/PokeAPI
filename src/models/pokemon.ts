import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
    name: String,
    gender: String,
    type: {
        ref: 'PokeType',
        type: mongoose.Schema.Types.ObjectId,
    },    
    subtype: {
        ref: 'PokeType',
        type: mongoose.Schema.Types.ObjectId,
    },
    height: Number,
    weight: Number,
    photo: String
});

export const Pokemon = mongoose.model("Pokemon", PokemonSchema);