import { createLogisticsRepository, deleteLogisticsRepository, getLogisticsByIdRepository, updateLogisticsRepository, updateLogisticsStatusRepository,  } from "../repositories/logistics";

export const createLogisticsService = async (data) => {
    return await createLogisticsRepository(data);
}

export const getLogisticsByIdService = async (id) => {
    return await getLogisticsByIdRepository(id);
}

export const updateLogisticsStatusService = async (delivery_id, pickup_ready_status) => {
    return await updateLogisticsStatusRepository(delivery_id, pickup_ready_status);
}

export const updateLogisticsService = async (delivery_id, data) => {
    return await updateLogisticsRepository(delivery_id, data);
}

export const deleteLogisticsService = async (delivery_id) => {
    return await deleteLogisticsRepository(delivery_id);
}