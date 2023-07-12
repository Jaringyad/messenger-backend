import mongoose from "mongoose";

export const Button = mongoose.model("Button",
    new mongoose.Schema({
        text:{ type: String},
        type: { type: String},
    }));