// import jwt from "jsonwebtoken";
// const isAuthenticated = async (req, res, next) => {
//     try {
//         const token = req.cookies.token;
//         if(!token){
//             return res.status(400).json({
//                 message:"User not authenticated",
//                 success:false
//             })
//         }
//         // if token exists
//         const decode = jwt.verify(token, process.env.SECRET_KEY);
//         if(!decode){
//             return res.status(400).json({
//                 message:"Invalid token",
//                 success:false
//             })
//         }
 
//         // if token verified
//         req.id = decode.userId;
//         next();
//     } catch (error) {
//         console.log("error: "+error);
//     }
// };

// export default isAuthenticated;

import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false
            });
        }

        // If token exists
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        if (!decode) {
            return res.status(401).json({
                message: "Invalid token",
                success: false
            });
        }

        // If token verified
        req.id = decode.userId;
        next();
    } catch (error) {
        console.log("error: " + error);
        return res.status(500).json({
            message: "Server error: "+error,
            success: false
        });
    }
};

export default isAuthenticated;
