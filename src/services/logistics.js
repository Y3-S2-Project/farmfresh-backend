import { createLogisticsRepository } from "../repositories/logistics";

export const createLogisticsService = async (data) => {
    return await createLogisticsRepository(data);
}