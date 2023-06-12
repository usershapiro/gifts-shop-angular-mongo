import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/logic";
import { GiftModel } from "../4-models/giftsModel";

const router = express.Router(); // Capital R

// GET http://localhost:3001/api/targets
router.get("/targets", async (request: Request, response: Response, next: NextFunction) => {
    try {
         const targets = await logic.getAllTargets();
         response.json(targets)
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/gifts-by-targetId/:targetId
router.get("/gifts-by-targetId/:targetId", async (request: Request, response: Response, next: NextFunction) => {
    try {
         const targetId = request.params.targetId
         const gifts = await logic.getGiftsByTarget(targetId)
         response.json(gifts)
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/gifts
router.post("/gifts", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const gift = new GiftModel(request.body);
        const addedGift = await logic.addGift(gift);
        response.status(201).json(addedGift);
    }
    catch (err: any) {
        next(err);
    }
});

// GET http://localhost:3001/api/gifts/:_id
router.delete("/gifts/:_id", async (request: Request, response: Response, next: NextFunction) => {
    try {
       const _id = request.params._id
       await logic.deleteGift(_id)
       response.sendStatus(204)
    }
    catch (err: any) {
        next(err);
    }
});
export default router;

