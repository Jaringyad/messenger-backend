import mongoose from "mongoose";
import { Button } from "./button";

export const Channel = mongoose.model("Channel",
    new mongoose.Schema({
        channel:{ type: String, required: true },
        text: { type: String, required: true },
        keyboardType: { type: String },
        buttons: { type: [Button.schema] },
}));