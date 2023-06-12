import { ResourceNotFoundErrorModel, ValidationErrorModel } from "../4-models/error-models";
import { GiftModel, IGiftsModel } from "../4-models/giftsModel";
import { ITargetModel, TargetModel } from "../4-models/targetModel";

function getAllTargets(): Promise<ITargetModel[]>{
    return TargetModel.find().exec();
}

function getGiftsByTarget(targetId: string):Promise <IGiftsModel[]> {
     return GiftModel.find({ targetId }).populate("target").exec();
}
function addGift(gift: IGiftsModel): Promise<IGiftsModel> {
    const errors = gift.validateSync();
    if(errors) throw new ValidationErrorModel(errors.message);
    return gift.save();
}

async function deleteGift(_id: string):Promise<void> {
    const deleteGift = await GiftModel.findByIdAndDelete(_id);
    if(!deleteGift) throw new ResourceNotFoundErrorModel(_id);
}
export default {
    getAllTargets,
    getGiftsByTarget,
    addGift,
    deleteGift
};