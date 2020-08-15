import mongoose from "mongoose";

const PokeTypeSchema = new mongoose.Schema({
    name: String,
    color: String,
});

export const PokeType = mongoose.model("PokeType", PokeTypeSchema);