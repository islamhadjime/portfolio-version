import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contact';
import aiRoutes from './routes/ai';
import errorHandler from './middlewares/errorHandler';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use('/api/contact', contactRoutes);
app.use('/api/ai', aiRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));