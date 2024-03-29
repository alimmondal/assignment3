import express from 'express';
import { OrderController } from './order.controller';
const router = express.Router();

router.post(
  '/',
  // validateRequest(OrderValidation.createOrderZodSchema),
  OrderController.createOrders
);

router.get('/', OrderController.getAllOrders);

export const OrderRoutes = router;
