import mongoose from "mongoose";

const PokeTypeSchema = new mongoose.Schema({
    name: { type: String, required: true , unique: true },
    color: String,
});

export const PokeType = mongoose.model("PokeType", PokeTypeSchema);