import { Router } from 'express';
import { submitContact } from '../controllers/contactController';
import { validateContact } from '../middlewares/validation';

const router = Router();
router.post('/', validateContact, submitContact);
export default router;