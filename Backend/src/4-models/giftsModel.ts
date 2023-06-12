import mongoose from "mongoose";
import { TargetModel } from "./targetModel";

export interface IGiftsModel extends mongoose.Document {
    targetId: mongoose.Schema.Types.ObjectId;
    giftName: string;
    description: string;
    price: number;
    discount: number;
}

export const GiftsSchema = new mongoose.Schema<IGiftsModel>({
    targetId: {
         type: mongoose.Schema.Types.ObjectId
     } ,
    giftName: {
        type: String,
        required: [true, "Missing giftName"]
    },
    description:{
        type: String,
        required: [true, "Missing description"]
    },
    price: {
        type: Number,
        required: [true, "Missing price"]
    },
    discount: {
        type: Number,
        required: [true, "Missing discount"]
    }
}, {
        versionKey: false,
        toJSON: {virtuals:true},
        id: false
});

GiftsSchema.virtual("target", {
    ref: TargetModel,
    localField:"targetId",
    foreignField: "_id",
    justOne: true
});

export const GiftModel = mongoose.model<IGiftsModel>("GiftsModel", GiftsSchema,"gifts");