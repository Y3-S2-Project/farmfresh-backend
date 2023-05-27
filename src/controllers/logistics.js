import asyncHandler from "../middleware/asyncHandler";
import { makeResponse } from "../utils/response";
import {createLogisticsService, deleteLogisticsService, getLogisticsByIdService, updateLogisticsService, updateLogisticsStatusService} from "../services/logistics";

export const createLogistics = asyncHandler(async (req, res) => {
    const result = await createLogisticsService(req.body)
    if (!result) return makeResponse({ res, status: 500, message: 'Error creating logistics' })
    return makeResponse({ res, data: result, message: 'Logistics created successfully' })
});

export const getLogisticsById = asyncHandler(async (req, res) => {
    const result = await getLogisticsByIdService(req.params.id)
    if (!result) return makeResponse({ res, status: 404, message: 'Logistics not found' })
    return makeResponse({ res, data: result, message: 'Logistics retrieved successfully' })
});

export const updateLogisticsStatus = asyncHandler(async (req, res) => {
    const result = await updateLogisticsStatusService(req.params.id, req.body)
    if (!result) return makeResponse({ res, status: 404, message: 'Logistics not found' })
    return makeResponse({ res, data: result, message: 'Logistics updated successfully' })
});

export const updateLogistics = asyncHandler(async (req, res) => {
    const result = await updateLogisticsService(req.params.id, req.body)
    if (!result) return makeResponse({ res, status: 404, message: 'Logistics not found' })
    return makeResponse({ res, data: result, message: 'Logistics updated successfully' })
});

export const deleteLogistics = asyncHandler(async (req, res) => {
    const result = await deleteLogisticsService(req.params.id)
    if (!result) return makeResponse({ res, status: 404, message: 'Logistics not found' })
    return makeResponse({ res, message: 'Logistics deleted successfully' })
});