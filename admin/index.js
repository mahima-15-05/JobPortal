import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from 'dotenv';
import connectDb from "./utils/db.js";
dotenv.config({});
import userRoute from './routes/user.routes.js'
import companyRoute from './routes/company.routes.js'
import jobRoute from './routes/job.routes.js'
import applicationRoute from './routes/application.routes.js'


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin: `http://localhost:5173`,
    credentials : true,
}
app.use(cors(corsOptions));

// all the api's
app.use('/api/v1/user',userRoute);
app.use('/api/v1/company',companyRoute);
app.use('/api/v1/job',jobRoute);
app.use('/api/v1/application',applicationRoute);



app.get('/', (req,res)=>{
    res.json({
        message:"This is home page",
        status:true

    })
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    connectDb();
    console.log(`Server running at port http://localhost:${PORT}`);
   
});

// new
// import express from "express";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from 'dotenv';
// import connectDb from "./utils/db.js";
// import userRoute from './routes/user.routes.js';

// dotenv.config(); // Ensure this is at the top

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser()); // Make sure this is before your routes
// app.use(cors({
//     origin: 'http://localhost:5173', // Correct URL
//     credentials: true // Allow cookies to be sent
// }));

// // Routes
// app.use('/api/v1/user', userRoute);

// app.get('/', (req, res) => {
//     res.json({
//         message: "This is home page",
//         status: true
//     });
// });

// // Start server after connecting to database
// const PORT = process.env.PORT || 3000;
// connectDb().then(() => {
//     app.listen(PORT, () => {
//         console.log(`Server running at http://localhost:${PORT}`);
//     });
// }).catch(err => {
//     console.error('Failed to connect to database:', err);
// });
