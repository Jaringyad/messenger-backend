import mongoose from "mongoose";
import { Channel } from "./channel";

export const Setting = mongoose.model("Setting",
    new mongoose.Schema({
        settings: {type: [Channel.schema], required: true}
}));