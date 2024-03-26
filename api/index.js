import express from 'express';
import userRoutes from './routes/users.js';
import cors from 'cors';


const app = express();

app.use(express.json());
app.use(cors())

app.use('/', userRoutes)

const PORT = 8800

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
