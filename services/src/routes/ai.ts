import { Router } from 'express';
import { getTagline, improveComment, generateQuiz, checkQuizAnswer } from '../controllers/aiController';

const router = Router();
router.get('/tagline', getTagline);
router.post('/improve', improveComment);
router.post('/generate-quiz', generateQuiz);
router.post('/check-answer', checkQuizAnswer);

export default router;