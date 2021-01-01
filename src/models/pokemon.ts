import mongoose from "mongoose";

const PokemonSchema = new mongoose.Schema({
    number: { type: Number, required: true , unique: true },
    name: { type: String, required: true },
    hasGender: { type: Boolean, default: true },
    description: String,
    type: [{
        ref: 'PokeType',
        type: mongoose.Schema.Types.ObjectId,
    }],
    height: Number,
    weight: Number,
    sprite: String
});

export const Pokemon = mongoose.model("Pokemon", PokemonSchema);