import express from "express";
import employeesRouter from "./routes/employees.routes.js";
import indexRouter from "./routes/index.routes.js";
import { PORT } from './config.js'

const app = express();

app.use(express.json())

app.use(indexRouter);
app.use('/api', employeesRouter);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'Algo salio mal'
    })
} )

app.listen(PORT);
console.log(`Server corriendo en el puerto: ${PORT}`);
