import Logistics from '../models/logistics'

export const createLogisticsRepository = async (data) => {
  const newLogistics = new Logistics(data)
  let deliveryId = 'LID' + ((await Logistics.count()) + 1).toString().padStart(3, '0')
  newLogistics.delivery_id = deliveryId
  return await newLogistics.save()
}

export const getLogisticsByIdRepository = async (delivery_id) => {
  return await Logistics.findOne({ delivery_id })
}

export const updateLogisticsStatusRepository = async (delivery_id, pickup_ready_status) => {
  return await Logistics.findOneAndUpdate({ delivery_id }, pickup_ready_status, { new: true })
}

export const updateLogisticsRepository = async (delivery_id, data) => {
  return await Logistics.findOneAndUpdate({ delivery_id }, data, { new: true })
}

export const deleteLogisticsRepository = async (delivery_id) => {
  return await Logistics.findOneAndDelete({ delivery_id })
}
