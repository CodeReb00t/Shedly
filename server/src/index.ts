import express from 'express'
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

// RouteImports
// Configurations
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
// ROUTES
app.get('/', (req, res) => {
    res.send('This is Home Route')
})


//Server
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server running on port: ${port}`);
})

