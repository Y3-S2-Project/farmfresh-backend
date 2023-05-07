import asyncHandler from "../middleware/asyncHandler";
import { makeResponse } from "../utils/response";
import {createLogisticsService} from "../services/logistics";

export const createLogistics = asyncHandler(async (req, res) => {
    const result = await createLogisticsService(req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Error creating logistics' })
    return makeResponse({ res, data: result, message: 'Logistics created successfully' })
});

