import express from 'express';
import validateRequest from '../../middleware/validateRequest';
import { CowController } from './cow.controller';
import { CowValidation } from './cow.validation';
const router = express.Router();

router.get('/:id', CowController.getSingleCow);

router.post(
  '/',
  validateRequest(CowValidation.createCowZodSchema),
  CowController.createCow
);
router.get('/', CowController.getAllCows);

router.delete('/:id', CowController.deleteCow);

router.patch(
  '/:id',
  validateRequest(CowValidation.updateCowZodSchema),
  CowController.updateCow
);

export const CowRoutes = router;
