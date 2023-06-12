import mongoose from "mongoose";

export interface ITargetModel extends mongoose.Document {
    type:string
}

export const TargetSchema = new mongoose.Schema<ITargetModel>({
    type: {
        type: String,
        required: [true, "Missing type"]
    }
});

export const TargetModel = mongoose.model<ITargetModel>("TargetModel", TargetSchema,"audience-target")