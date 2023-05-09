import { createPaymentRepository } from '../repositories/payment.js';

export const createPaymentService = async (data) => {
    return await createPaymentRepository(data)
}