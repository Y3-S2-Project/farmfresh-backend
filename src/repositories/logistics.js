import Logistics from "../models/logistics";

export const createLogisticsRepository = async (data) => {
    const newLogistics = new Logistics(data);
    const logisticsCount = await Logistics.count();
    newLogistics.delivery_id = "LID00" + (parseInt(logisticsCount) + 1);
    return await newLogistics.save();
};